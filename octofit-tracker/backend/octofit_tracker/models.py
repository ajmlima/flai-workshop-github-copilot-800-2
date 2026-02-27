from djongo import models


class OctoUser(models.Model):
    id = models.ObjectIdField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    display_name = models.CharField(max_length=150, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.display_name or self.username


class Team(models.Model):
    id = models.ObjectIdField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)
    description = models.TextField(blank=True)
    members = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Activity(models.Model):
    id = models.ObjectIdField(primary_key=True)
    user_id = models.CharField(max_length=24)
    activity_type = models.CharField(max_length=100)
    duration_minutes = models.PositiveIntegerField()
    calories_burned = models.PositiveIntegerField(default=0)
    performed_at = models.DateTimeField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.activity_type} ({self.duration_minutes} min)"


class Workout(models.Model):
    id = models.ObjectIdField(primary_key=True)
    user_id = models.CharField(max_length=24)
    title = models.CharField(max_length=200)
    focus_area = models.CharField(max_length=100, blank=True)
    duration_minutes = models.PositiveIntegerField()
    difficulty = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class LeaderboardEntry(models.Model):
    id = models.ObjectIdField(primary_key=True)
    team_name = models.CharField(max_length=200)
    points = models.PositiveIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.team_name}: {self.points}"
