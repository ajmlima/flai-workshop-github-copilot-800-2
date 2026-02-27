from django.contrib import admin

from .models import Activity, LeaderboardEntry, OctoUser, Team, Workout


@admin.register(OctoUser)
class OctoUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'display_name', 'created_at')
    search_fields = ('username', 'email', 'display_name')


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ('name',)


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('activity_type', 'user_id', 'duration_minutes', 'performed_at')
    search_fields = ('activity_type', 'user_id')


@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('title', 'user_id', 'duration_minutes', 'created_at')
    search_fields = ('title', 'user_id')


@admin.register(LeaderboardEntry)
class LeaderboardEntryAdmin(admin.ModelAdmin):
    list_display = ('team_name', 'points', 'updated_at')
    search_fields = ('team_name',)
