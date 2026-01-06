from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db.models import Q, Count, Avg, Sum
from django.core.paginator import Paginator
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_POST
from django.views.generic import ListView, DetailView
from django.utils.decorators import method_decorator
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Game, Category, Score, GameComment, Like
from .forms import GameUploadForm, GameEditForm, GameSearchForm, GameCommentForm
from users.models import Profile
import zipfile
import os
from django.conf import settings
from django.views.static import serve


class GameListView(ListView):
    """
    Список всех игр с фильтрацией и поиском
    """
    model = Game
    template_name = 'games/game_list.html'
    context_object_name = 'games'
    paginate_by = 12

    def get_queryset(self):
        queryset = Game.objects.filter(status='approved').select_related('author')

        # Фильтрация по категории
        category_slug = self.request.GET.get('category')
        if category_slug:
            queryset = queryset.filter(categories__slug=category_slug)

        # Фильтрация по типу игры
        game_type = self.request.GET.get('type')
        if game_type:
            queryset = queryset.filter(game_type=game_type)

        # Фильтрация по цене
        price_filter = self.request.GET.get('price', 'all')
        if price_filter == 'free':
            queryset = queryset.filter(is_premium=False)
        elif price_filter == 'premium':
            queryset = queryset.filter(is_premium=True)

        # Поиск
        search_query = self.request.GET.get('q')
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(description__icontains=search_query) |
                Q(short_description__icontains=search_query) |
                Q(tags__name__icontains=search_query)
            ).distinct()

        # Сортировка
        sort_by = self.request.GET.get('sort', 'newest')
        if sort_by == 'popular':
            queryset = queryset.order_by('-plays_count')
        elif sort_by == 'rating':
            queryset = queryset.order_by('-average_rating')
        elif sort_by == 'plays':
            queryset = queryset.order_by('-plays_count')
        elif sort_by == 'title':
            queryset = queryset.order_by('title')
        else:  # newest
            queryset = queryset.order_by('-published_at')

        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.annotate(game_count=Count('games'))
        context['search_form'] = GameSearchForm(self.request.GET or None)
        context['featured_games'] = Game.objects.filter(
            status='approved', is_featured=True
        )[:6]

        # Статистика платформы
        context['total_games'] = Game.objects.filter(status='approved').count()
        context['total_plays'] = Game.objects.filter(status='approved').aggregate(
            total=Sum('plays_count')
        )['total'] or 0

        return context


class GameDetailView(DetailView):
    """
    Детальная страница игры
    """
    model = Game
    template_name = 'games/game_detail.html'
    context_object_name = 'game'

    def get_queryset(self):
        return Game.objects.filter(status='approved').select_related('author')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        game = self.object

        # Увеличиваем счетчик просмотров
        game.increment_plays()

        # Получаем похожие игры
        similar_games = Game.objects.filter(
            status='approved',
            categories__in=game.categories.all()
        ).exclude(id=game.id).distinct()[:6]

        # Получаем топ рекордов
        top_scores = Score.objects.filter(game=game).select_related('player')[:10]

        # Получаем комментарии
        comments = GameComment.objects.filter(
            game=game, is_active=True
        ).select_related('author').order_by('-created_at')[:50]

        # Проверяем, лайкнул ли пользователь игру
        user_liked = False
        if self.request.user.is_authenticated:
            user_liked = Like.objects.filter(
                game=game, user=self.request.user
            ).exists()

        # Форма для комментария
        comment_form = GameCommentForm()

        context.update({
            'similar_games': similar_games,
            'top_scores': top_scores,
            'comments': comments,
            'comment_form': comment_form,
            'user_liked': user_liked,
            'total_comments': comments.count(),
        })

        return context


@method_decorator(login_required, name='dispatch')
class GameUploadView(CreateView):
    """
    Загрузка новой игры (только для разработчиков)
    """
    model = Game
    form_class = GameUploadForm
    template_name = 'games/game_upload.html'

    def dispatch(self, request, *args, **kwargs):
        # Проверяем, является ли пользователь разработчиком
        if not request.user.profile.role == 'developer':
            messages.error(request, 'Только разработчики могут загружать игры.')
            return redirect('home')
        return super().dispatch(request, *args, **kwargs)

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user
        return kwargs

    def form_valid(self, form):
        response = super().form_valid(form)

        # Обновляем статистику разработчика
        profile = self.request.user.profile
        profile.games_uploaded += 1
        profile.save()

        messages.success(
            self.request,
            f'Игра "{form.instance.title}" успешно загружена и отправлена на модерацию! '
            'Мы уведомим вас по email когда она будет проверена.'
        )

        return response

    def get_success_url(self):
        return reverse_lazy('game_detail', kwargs={'slug': self.object.slug})


@method_decorator(login_required, name='dispatch')
class GameEditView(UserPassesTestMixin, UpdateView):
    """
    Редактирование игры (только автор или модератор)
    """
    model = Game
    form_class = GameEditForm
    template_name = 'games/game_edit.html'

    def test_func(self):
        game = self.get_object()
        return (
                self.request.user == game.author or
                self.request.user.has_perm('games.can_moderate_games')
        )

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user
        return kwargs

    def form_valid(self, form):
        # Если игра была одобрена и автор меняет ее, возвращаем на модерацию
        if form.instance.status == 'approved' and self.request.user == form.instance.author:
            form.instance.status = 'pending'
            messages.info(
                self.request,
                'Игра возвращена на модерацию после изменений.'
            )

        response = super().form_valid(form)
        messages.success(self.request, 'Игра успешно обновлена.')
        return response

    def get_success_url(self):
        return reverse_lazy('game_detail', kwargs={'slug': self.object.slug})


@method_decorator(login_required, name='dispatch')
class GameDeleteView(UserPassesTestMixin, DeleteView):
    """
    Удаление игры (только автор или модератор)
    """
    model = Game
    template_name = 'games/game_confirm_delete.html'
    success_url = reverse_lazy('game_list')

    def test_func(self):
        game = self.get_object()
        return (
                self.request.user == game.author or
                self.request.user.has_perm('games.can_moderate_games')
        )

    def delete(self, request, *args, **kwargs):
        messages.success(request, 'Игра успешно удалена.')
        return super().delete(request, *args, **kwargs)


def play_game(request, slug):
    """
    Запуск игры
    """
    game = get_object_or_404(Game, slug=slug, status='approved')

    # Проверяем доступ для премиум игр
    if game.is_premium and not request.user.is_authenticated:
        messages.error(request, 'Для игры в премиум игры необходимо войти в систему.')
        return redirect('login')

    # Для премиум игр проверяем покупку (в будущем)
    if game.is_premium and request.user.is_authenticated:
        # Здесь будет проверка покупки игры
        pass

    return render(request, 'games/play_game.html', {'game': game})


@login_required
@require_POST
def save_score(request, slug):
    """
    Сохранение рекорда игрока
    """
    game = get_object_or_404(Game, slug=slug, status='approved')

    try:
        score_value = int(request.POST.get('score', 0))
        time_value = int(request.POST.get('time', 0))
        level_value = int(request.POST.get('level', 1))

        # Создаем или обновляем рекорд
        score, created = Score.objects.update_or_create(
            game=game,
            player=request.user,
            defaults={
                'score': score_value,
                'time': time_value,
                'level': level_value,
                'data': request.POST.get('data', {})
            }
        )

        # Обновляем статистику игрока
        profile = request.user.profile
        profile.games_played += 1
        profile.total_score += score_value
        profile.save()

        return JsonResponse({
            'success': True,
            'message': 'Рекорд сохранен!' if created else 'Рекорд обновлен!',
            'score': score_value,
            'position': 1  # Здесь будет реальная позиция в таблице лидеров
        })

    except (ValueError, TypeError) as e:
        return JsonResponse({
            'success': False,
            'message': 'Некорректные данные'
        }, status=400)


@login_required
@require_POST
def add_comment(request, slug):
    """
    Добавление комментария к игре
    """
    game = get_object_or_404(Game, slug=slug, status='approved')

    form = GameCommentForm(request.POST)
    if form.is_valid():
        comment = form.save(commit=False)
        comment.game = game
        comment.author = request.user
        comment.save()

        # Обновляем средний рейтинг игры
        avg_rating = GameComment.objects.filter(
            game=game, is_active=True
        ).aggregate(avg=Avg('rating'))['avg'] or 0
        game.average_rating = round(avg_rating, 2)
        game.save()

        messages.success(request, 'Ваш комментарий добавлен!')
        return redirect('game_detail', slug=slug)

    messages.error(request, 'Пожалуйста, исправьте ошибки в форме.')
    return redirect('game_detail', slug=slug)


@login_required
@require_POST
def toggle_like(request, slug):
    """
    Лайк/дизлайк игры
    """
    game = get_object_or_404(Game, slug=slug, status='approved')

    like, created = Like.objects.get_or_create(game=game, user=request.user)

    if not created:
        # Убираем лайк
        like.delete()
        game.likes_count = max(0, game.likes_count - 1)
        liked = False
    else:
        # Ставим лайк
        game.likes_count += 1
        liked = True

    game.save()

    if request.is_ajax():
        return JsonResponse({
            'success': True,
            'liked': liked,
            'likes_count': game.likes_count
        })

    messages.success(request, 'Лайк обновлен!' if liked else 'Лайк убран!')
    return redirect('game_detail', slug=slug)


def serve_game_file(request, slug, path=''):
    """
    Сервинг файлов игры (для запуска HTML игр)
    """
    game = get_object_or_404(Game, slug=slug, status='approved')

    # Базовый путь к файлам игры
    game_dir = os.path.dirname(game.game_file.path)
    game_name = os.path.splitext(os.path.basename(game.game_file.path))[0]
    extracted_path = os.path.join(game_dir, 'extracted', game_name)

    # Если архив не распакован - распаковываем
    if not os.path.exists(extracted_path):
        os.makedirs(extracted_path, exist_ok=True)
        with zipfile.ZipFile(game.game_file.path, 'r') as zip_ref:
            zip_ref.extractall(extracted_path)

    # Определяем запрашиваемый файл
    if not path:
        path = 'index.html'

    file_path = os.path.join(extracted_path, path)

    # Проверяем существование файла
    if not os.path.exists(file_path):
        return HttpResponse('Файл не найден', status=404)

    # Проверяем, что файл внутри безопасной директории
    if not os.path.commonpath([extracted_path, file_path]) == extracted_path:
        return HttpResponse('Доступ запрещен', status=403)

    # Отдаем файл
    return serve(request, os.path.basename(file_path), os.path.dirname(file_path))


def category_games(request, slug):
    """
    Игры по категории
    """
    category = get_object_or_404(Category, slug=slug)
    games = Game.objects.filter(
        status='approved', categories=category
    ).select_related('author').order_by('-published_at')

    # Пагинация
    paginator = Paginator(games, 12)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'games/category_games.html', {
        'category': category,
        'games': page_obj,
        'total_games': games.count()
    })


@login_required
def my_games(request):
    """
    Список игр текущего пользователя (для разработчиков)
    """
    if not request.user.profile.role == 'developer':
        messages.error(request, 'Только разработчики имеют доступ к этому разделу.')
        return redirect('home')

    games = Game.objects.filter(author=request.user).order_by('-created_at')

    return render(request, 'games/my_games.html', {
        'games': games,
        'total_games': games.count(),
        'approved_games': games.filter(status='approved').count(),
        'pending_games': games.filter(status='pending').count(),
        'draft_games': games.filter(status='draft').count(),
    })


def leaderboard(request, slug=None):
    """
    Таблица лидеров (общая или для конкретной игры)
    """
    if slug:
        game = get_object_or_404(Game, slug=slug, status='approved')
        scores = Score.objects.filter(game=game).select_related('player').order_by('-score')[:100]
        context = {
            'game': game,
            'scores': scores,
            'is_game_leaderboard': True
        }
        template = 'games/game_leaderboard.html'
    else:
        # Общая таблица лидеров (по всем играм)
        # Здесь будет сложная логика подсчета очков
        # Пока просто покажем топ игроков
        profiles = Profile.objects.order_by('-total_score')[:100]
        context = {
            'profiles': profiles,
            'is_game_leaderboard': False
        }
        template = 'games/leaderboard.html'

    return render(request, template, context)
