from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    USER_ROLES = [
        ('player', 'Игрок'),
        ('developer', 'Разработчик'),
        ('moderator', 'Модератор'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True, verbose_name='О себе')
    avatar = models.ImageField(
        upload_to='avatars/',
        blank=True,
        null=True,
        verbose_name='Аватар',
        default='avatars/default.png'
    )
    role = models.CharField(
        max_length=20,
        choices=USER_ROLES,
        default='player',
        verbose_name='Роль'
    )
    games_played = models.IntegerField(default=0, verbose_name='Сыграно игр')
    total_score = models.IntegerField(default=0, verbose_name='Общий счет')
    games_uploaded = models.IntegerField(default=0, verbose_name='Загружено игр')
    registration_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата регистрации')
    is_verified = models.BooleanField(default=False, verbose_name='Верифицирован')

    class Meta:
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'

    def __str__(self):
        return f"{self.user.username} ({self.get_role_display()})"


# Сигналы для автоматического создания профиля
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
