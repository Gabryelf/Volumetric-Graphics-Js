from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Game, GameVersion, Score, GameComment, Like


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon', 'created_at', 'game_count')
    list_filter = ('created_at',)
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

    def game_count(self, obj):
        return obj.games.count()

    game_count.short_description = 'Количество игр'


class GameVersionInline(admin.TabularInline):
    model = GameVersion
    extra = 0
    readonly_fields = ('created_at',)


class GameAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'author',
        'status',
        'game_type',
        'is_featured',  # ДОБАВЛЕНО
        'is_premium',  # ДОБАВЛЕНО для удобства
        'plays_count',
        'average_rating',
        'created_at',
        'preview_thumbnail'
    )
    list_filter = ('status', 'game_type', 'is_featured', 'is_premium', 'created_at', 'categories')
    search_fields = ('title', 'description', 'author__username')
    list_editable = ('status', 'is_featured', 'is_premium')  # Можно редактировать прямо из списка
    readonly_fields = ('plays_count', 'likes_count', 'average_rating', 'created_at', 'updated_at', 'published_at')
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ('categories',)
    inlines = [GameVersionInline]

    fieldsets = (
        ('Основная информация', {
            'fields': ('title', 'slug', 'description', 'short_description', 'author', 'status')
        }),
        ('Классификация', {
            'fields': ('game_type', 'categories', 'tags')
        }),
        ('Медиа файлы', {
            'fields': ('thumbnail', 'screenshot1', 'screenshot2', 'screenshot3', 'game_file')
        }),
        ('Монетизация и статус', {
            'fields': ('is_featured', 'is_premium', 'price')
        }),
        ('Статистика', {
            'fields': ('plays_count', 'likes_count', 'average_rating'),
            'classes': ('collapse',)
        }),
        ('Даты', {
            'fields': ('created_at', 'updated_at', 'published_at'),
            'classes': ('collapse',)
        }),
    )

    def preview_thumbnail(self, obj):
        if obj.thumbnail:
            return format_html(
                '<img src="{}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;" />',
                obj.thumbnail.url
            )
        return "Нет превью"

    preview_thumbnail.short_description = 'Превью'

    actions = ['approve_games', 'reject_games', 'feature_games']

    def approve_games(self, request, queryset):
        updated = queryset.update(status='approved')
        self.message_user(request, f'{updated} игр одобрено.')

    approve_games.short_description = 'Одобрить выбранные игры'

    def reject_games(self, request, queryset):
        updated = queryset.update(status='rejected')
        self.message_user(request, f'{updated} игр отклонено.')

    reject_games.short_description = 'Отклонить выбранные игры'

    def feature_games(self, request, queryset):
        updated = queryset.update(is_featured=True)
        self.message_user(request, f'{updated} игр отмечены как рекомендуемые.')

    feature_games.short_description = 'Отметить как рекомендуемые'


class ScoreAdmin(admin.ModelAdmin):
    list_display = ('game', 'player', 'score', 'level', 'time', 'created_at')
    list_filter = ('game', 'player', 'created_at')
    search_fields = ('game__title', 'player__username')
    readonly_fields = ('created_at',)


class GameCommentAdmin(admin.ModelAdmin):
    list_display = ('game', 'author', 'rating', 'created_at', 'is_active')
    list_filter = ('rating', 'is_active', 'created_at')
    search_fields = ('game__title', 'author__username', 'content')
    list_editable = ('is_active',)
    readonly_fields = ('created_at', 'updated_at')


# Регистрация моделей в админке
admin.site.register(Category, CategoryAdmin)
admin.site.register(Game, GameAdmin)
admin.site.register(Score, ScoreAdmin)
admin.site.register(GameComment, GameCommentAdmin)
admin.site.register(Like)
admin.site.register(GameVersion)
