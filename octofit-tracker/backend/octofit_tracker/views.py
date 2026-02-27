from rest_framework import viewsets

from .models import Activity, LeaderboardEntry, OctoUser, Team, Workout
from .serializers import (
    ActivitySerializer,
    LeaderboardEntrySerializer,
    OctoUserSerializer,
    TeamSerializer,
    WorkoutSerializer,
)


class OctoUserViewSet(viewsets.ModelViewSet):
    queryset = OctoUser.objects.all().order_by('-created_at')
    serializer_class = OctoUserSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all().order_by('-created_at')
    serializer_class = TeamSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all().order_by('-performed_at')
    serializer_class = ActivitySerializer


class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all().order_by('-created_at')
    serializer_class = WorkoutSerializer


class LeaderboardEntryViewSet(viewsets.ModelViewSet):
    queryset = LeaderboardEntry.objects.all().order_by('-points')
    serializer_class = LeaderboardEntrySerializer
