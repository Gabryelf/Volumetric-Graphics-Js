from django.urls import path
from . import views
from .views import (
    GameListView, GameDetailView, GameUploadView,
    GameEditView, GameDeleteView
)

urlpatterns = [
    # Основные маршруты
    path('', GameListView.as_view(), name='game_list'),
    path('category/<slug:slug>/', views.category_games, name='games_by_category'),
    path('upload/', GameUploadView.as_view(), name='game_upload'),
    path('my-games/', views.my_games, name='my_games'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
    path('leaderboard/<slug:slug>/', views.leaderboard, name='game_leaderboard'),

    # Маршруты для конкретной игры
    path('<slug:slug>/', GameDetailView.as_view(), name='game_detail'),
    path('<slug:slug>/play/', views.play_game, name='play_game'),
    path('<slug:slug>/edit/', GameEditView.as_view(), name='game_edit'),
    path('<slug:slug>/delete/', GameDeleteView.as_view(), name='game_delete'),

    # API эндпоинты
    path('<slug:slug>/save-score/', views.save_score, name='save_score'),
    path('<slug:slug>/comment/', views.add_comment, name='add_comment'),
    path('<slug:slug>/like/', views.toggle_like, name='toggle_like'),

    # Сервинг файлов игры
    path('<slug:slug>/files/<path:path>', views.serve_game_file, name='serve_game_file'),
]