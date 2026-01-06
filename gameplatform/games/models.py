from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
from django.utils import timezone
from django.urls import reverse


class Category(models.Model):
    """
    Модель категории игр
    """
    name = models.CharField(max_length=100, verbose_name='Название')
    slug = models.SlugField(max_length=100, unique=True, verbose_name='URL')
    description = models.TextField(blank=True, verbose_name='Описание')
    icon = models.CharField(
        max_length=50,
        default='🎮',
        verbose_name='Иконка',
        help_text='Эмодзи или название иконки Font Awesome'
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['name']

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('games_by_category', kwargs={'slug': self.slug})


class Game(models.Model):
    """
    Модель игры на платформе
    """
    STATUS_CHOICES = [
        ('draft', 'Черновик'),
        ('pending', 'На модерации'),
        ('approved', 'Опубликовано'),
        ('rejected', 'Отклонено'),
        ('archived', 'В архиве'),
    ]

    GAME_TYPE_CHOICES = [
        ('html5', 'HTML5 (Canvas/WebGL)'),
        ('javascript', 'Чистый JavaScript'),
        ('unity', 'Unity WebGL'),
        ('flash', 'Flash (устаревший)'),
        ('other', 'Другое'),
    ]

    # Основная информация
    title = models.CharField(max_length=200, verbose_name='Название игры')
    slug = models.SlugField(max_length=200, unique=True, verbose_name='URL')
    description = models.TextField(verbose_name='Описание')
    short_description = models.CharField(max_length=300, verbose_name='Краткое описание')

    # Автор и статус
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='games',
        verbose_name='Автор'
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='draft',
        verbose_name='Статус'
    )
    game_type = models.CharField(
        max_length=20,
        choices=GAME_TYPE_CHOICES,
        default='html5',
        verbose_name='Тип игры'
    )

    # Категории и теги
    categories = models.ManyToManyField(Category, related_name='games', verbose_name='Категории')
    tags = TaggableManager(verbose_name='Теги', help_text='Через запятую')

    # Файлы игры
    game_file = models.FileField(
        upload_to='games/files/%Y/%m/%d/',
        verbose_name='Файл игры (ZIP)',
        help_text='Загрузите ZIP архив с игрой. Главный файл должен называться index.html'
    )
    thumbnail = models.ImageField(
        upload_to='games/thumbnails/%Y/%m/%d/',
        verbose_name='Превью игры',
        help_text='Рекомендуемый размер: 400x300px'
    )
    screenshot1 = models.ImageField(
        upload_to='games/screenshots/%Y/%m/%d/',
        blank=True, null=True,
        verbose_name='Скриншот 1'
    )
    screenshot2 = models.ImageField(
        upload_to='games/screenshots/%Y/%m/%d/',
        blank=True, null=True,
        verbose_name='Скриншот 2'
    )
    screenshot3 = models.ImageField(
        upload_to='games/screenshots/%Y/%m/%d/',
        blank=True, null=True,
        verbose_name='Скриншот 3'
    )

    # Статистика
    plays_count = models.IntegerField(default=0, verbose_name='Количество запусков')
    likes_count = models.IntegerField(default=0, verbose_name='Лайки')
    average_rating = models.FloatField(default=0.0, verbose_name='Средний рейтинг')

    # Настройки
    is_featured = models.BooleanField(default=False, verbose_name='Рекомендуемая')
    is_premium = models.BooleanField(default=False, verbose_name='Премиум игра')
    price = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        default=0.00,
        verbose_name='Цена',
        help_text='0.00 - бесплатная игра'
    )

    # Метаданные
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    published_at = models.DateTimeField(blank=True, null=True, verbose_name='Дата публикации')

    class Meta:
        verbose_name = 'Игра'
        verbose_name_plural = 'Игры'
        ordering = ['-created_at']
        permissions = [
            ('can_moderate_games', 'Может модерировать игры'),
            ('can_feature_games', 'Может отмечать игры как рекомендуемые'),
        ]

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('game_detail', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        # Автоматически устанавливаем дату публикации при одобрении
        if self.status == 'approved' and not self.published_at:
            self.published_at = timezone.now()
        super().save(*args, **kwargs)

    def is_playable(self):
        """Проверяет, можно ли играть в игру"""
        return self.status == 'approved' and self.game_file

    def get_game_url(self):
        """Возвращает URL для запуска игры"""
        if self.game_file:
            return reverse('play_game', kwargs={'slug': self.slug})
        return None

    def increment_plays(self):
        """Увеличивает счетчик запусков"""
        self.plays_count += 1
        self.save(update_fields=['plays_count'])


class GameVersion(models.Model):
    """
    Модель для хранения версий игры (для обновлений)
    """
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='versions')
    version = models.CharField(max_length=50, verbose_name='Версия')
    changelog = models.TextField(verbose_name='Список изменений')
    game_file = models.FileField(upload_to='games/versions/%Y/%m/%d/')
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.game.title} v{self.version}"


class Score(models.Model):
    """
    Модель для хранения рекордов игроков
    """
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='scores')
    player = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scores')
    score = models.IntegerField(verbose_name='Счет')
    time = models.IntegerField(default=0, verbose_name='Время (секунды)')
    level = models.IntegerField(default=1, verbose_name='Уровень')
    data = models.JSONField(default=dict, blank=True, verbose_name='Дополнительные данные')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата рекорда')

    class Meta:
        verbose_name = 'Рекорд'
        verbose_name_plural = 'Рекорды'
        ordering = ['-score', '-created_at']
        unique_together = ['game', 'player']  # Один рекорд на игру от игрока

    def __str__(self):
        return f"{self.player.username} - {self.score} в {self.game.title}"


class GameComment(models.Model):
    """
    Модель для комментариев к играм
    """
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='game_comments')
    content = models.TextField(verbose_name='Комментарий')
    rating = models.IntegerField(
        choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')],
        verbose_name='Оценка'
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    is_active = models.BooleanField(default=True, verbose_name='Активен')

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'
        ordering = ['-created_at']

    def __str__(self):
        return f"Комментарий от {self.author.username} к {self.game.title}"


class Like(models.Model):
    """
    Модель для лайков игр
    """
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='game_likes')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['game', 'user']

    def __str__(self):
        return f"{self.user.username} лайкнул {self.game.title}"
