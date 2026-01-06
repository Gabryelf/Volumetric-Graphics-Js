from django import forms
from django.core.exceptions import ValidationError
from django.utils.safestring import mark_safe
from .models import Game, Category, GameComment
from django.conf import settings
import os
import zipfile
from PIL import Image
import io


class GameUploadForm(forms.ModelForm):
    """
    Форма для загрузки игры разработчиком
    """
    categories = forms.ModelMultipleChoiceField(
        queryset=Category.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        required=True,
        label='Категории'
    )

    class Meta:
        model = Game
        fields = [
            'title', 'description', 'short_description',
            'game_type', 'categories', 'tags',
            'thumbnail', 'screenshot1', 'screenshot2', 'screenshot3',
            'game_file', 'price', 'is_premium'
        ]
        widgets = {
            'description': forms.Textarea(attrs={'rows': 5}),
            'short_description': forms.Textarea(attrs={'rows': 3, 'maxlength': 300}),
            'tags': forms.TextInput(attrs={
                'placeholder': 'через запятую, например: аркада, головоломка, ретро'
            }),
        }
        help_texts = {
            'game_file': 'ZIP архив с игрой. Главный файл должен называться index.html',
            'thumbnail': 'Рекомендуемый размер: 400x300px',
            'price': 'Оставьте 0.00 для бесплатной игры',
        }

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super().__init__(*args, **kwargs)

        # Настройка полей
        self.fields['price'].widget.attrs.update({'step': '0.01', 'min': '0'})

        # CSS классы для всех полей
        for field_name, field in self.fields.items():
            if field_name not in ['categories', 'tags', 'is_premium']:
                field.widget.attrs.update({'class': 'form-control'})

    def clean_game_file(self):
        game_file = self.cleaned_data.get('game_file')

        if not game_file:
            raise ValidationError('Необходимо загрузить файл игры')

        # Проверка размера файла
        if game_file.size > settings.MAX_UPLOAD_SIZE:
            raise ValidationError(
                f'Размер файла не должен превышать {settings.MAX_UPLOAD_SIZE // 1024 // 1024}MB'
            )

        # Проверка расширения
        ext = os.path.splitext(game_file.name)[1].lower()
        if ext not in settings.ALLOWED_GAME_EXTENSIONS:
            raise ValidationError(
                f'Допустимые форматы: {", ".join(settings.ALLOWED_GAME_EXTENSIONS)}'
            )

        # Проверка содержимого ZIP архива
        if ext == '.zip':
            try:
                with zipfile.ZipFile(game_file) as zip_file:
                    # Проверяем наличие index.html
                    if 'index.html' not in zip_file.namelist():
                        raise ValidationError(
                            'ZIP архив должен содержать файл index.html в корне'
                        )

                    # Проверяем размер распакованных файлов
                    total_size = sum(info.file_size for info in zip_file.infolist())
                    if total_size > settings.MAX_UPLOAD_SIZE * 2:
                        raise ValidationError('Слишком большой архив после распаковки')
            except zipfile.BadZipFile:
                raise ValidationError('Некорректный ZIP архив')

        return game_file

    def clean_thumbnail(self):
        thumbnail = self.cleaned_data.get('thumbnail')

        if thumbnail:
            # Проверка расширения изображения
            ext = os.path.splitext(thumbnail.name)[1].lower()
            if ext not in settings.ALLOWED_IMAGE_EXTENSIONS:
                raise ValidationError(
                    f'Допустимые форматы изображений: {", ".join(settings.ALLOWED_IMAGE_EXTENSIONS)}'
                )

            # Проверка размера изображения
            try:
                img = Image.open(thumbnail)
                img.verify()  # Проверка целостности файла

                # Проверка размеров
                img = Image.open(thumbnail)  # Открываем заново после verify
                if img.width < 200 or img.height < 150:
                    raise ValidationError(
                        f'Минимальный размер изображения: 200x150px. Ваше: {img.width}x{img.height}px'
                    )

                # Проверка соотношения сторон
                aspect_ratio = img.width / img.height
                if aspect_ratio < 1.2 or aspect_ratio > 1.5:
                    raise ValidationError(
                        'Рекомендуемое соотношение сторон: от 1.2 до 1.5 (например, 400x300)'
                    )

            except (IOError, SyntaxError) as e:
                raise ValidationError('Некорректный файл изображения')

        return thumbnail

    def clean_price(self):
        price = self.cleaned_data.get('price')
        is_premium = self.cleaned_data.get('is_premium')

        if is_premium and price <= 0:
            raise ValidationError('Премиум игры должны иметь цену больше 0')

        if not is_premium and price > 0:
            self.cleaned_data['is_premium'] = True

        return price

    def save(self, commit=True):
        # Устанавливаем автора
        if self.user:
            self.instance.author = self.user

        # Устанавливаем статус "на модерации" для новых игр
        if not self.instance.pk:
            self.instance.status = 'pending'

        return super().save(commit)


class GameEditForm(GameUploadForm):
    """
    Форма для редактирования существующей игры
    """

    class Meta(GameUploadForm.Meta):
        fields = GameUploadForm.Meta.fields + ['status']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # Разработчики не могут менять статус напрямую (только через модерацию)
        if self.instance.author == self.user and not self.user.has_perm('games.can_moderate_games'):
            self.fields.pop('status', None)


class GameSearchForm(forms.Form):
    """
    Форма поиска игр
    """
    query = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={
            'placeholder': 'Поиск игр...',
            'class': 'form-control'
        })
    )

    category = forms.ModelChoiceField(
        queryset=Category.objects.all(),
        required=False,
        empty_label='Все категории',
        widget=forms.Select(attrs={'class': 'form-control'})
    )

    game_type = forms.ChoiceField(
        choices=[('', 'Все типы')] + Game.GAME_TYPE_CHOICES,
        required=False,
        widget=forms.Select(attrs={'class': 'form-control'})
    )

    sort_by = forms.ChoiceField(
        choices=[
            ('newest', 'Новые'),
            ('popular', 'Популярные'),
            ('rating', 'По рейтингу'),
            ('plays', 'По запускам'),
            ('title', 'По названию'),
        ],
        required=False,
        initial='newest',
        widget=forms.Select(attrs={'class': 'form-control'})
    )

    price_filter = forms.ChoiceField(
        choices=[
            ('all', 'Все игры'),
            ('free', 'Только бесплатные'),
            ('premium', 'Только премиум'),
        ],
        required=False,
        initial='all',
        widget=forms.Select(attrs={'class': 'form-control'})
    )


class GameCommentForm(forms.ModelForm):
    """
    Форма для комментариев к играм
    """

    class Meta:
        model = GameComment
        fields = ['content', 'rating']
        widgets = {
            'content': forms.Textarea(attrs={
                'rows': 3,
                'placeholder': 'Оставьте ваш отзыв об игре...',
                'class': 'form-control'
            }),
            'rating': forms.RadioSelect(choices=[
                (1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')
            ]),
        }
        labels = {
            'content': 'Ваш комментарий',
            'rating': 'Оценка'
        }
