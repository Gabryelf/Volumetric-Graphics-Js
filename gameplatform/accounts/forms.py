from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from users.models import Profile


class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True, label='Email')
    role = forms.ChoiceField(
        choices=Profile.USER_ROLES,
        initial='player',
        label='Роль на платформе'
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', 'role')

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']

        if commit:
            user.save()
            # Обновляем профиль с выбранной ролью
            user.profile.role = self.cleaned_data['role']
            user.profile.save()

        return user
