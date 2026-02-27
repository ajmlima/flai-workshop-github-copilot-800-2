from rest_framework import serializers

from .models import Activity, LeaderboardEntry, OctoUser, Team, Workout


class OctoUserSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = OctoUser
        fields = ['id', 'username', 'email', 'display_name', 'created_at']

    def get_id(self, obj):
        return str(obj.id)


class TeamSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = Team
        fields = ['id', 'name', 'description', 'members', 'created_at']

    def get_id(self, obj):
        return str(obj.id)


class ActivitySerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = Activity
        fields = [
            'id',
            'user_id',
            'activity_type',
            'duration_minutes',
            'calories_burned',
            'performed_at',
            'notes',
        ]

    def get_id(self, obj):
        return str(obj.id)


class WorkoutSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = Workout
        fields = [
            'id',
            'user_id',
            'title',
            'focus_area',
            'duration_minutes',
            'difficulty',
            'created_at',
        ]

    def get_id(self, obj):
        return str(obj.id)


class LeaderboardEntrySerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = LeaderboardEntry
        fields = ['id', 'team_name', 'points', 'updated_at']

    def get_id(self, obj):
        return str(obj.id)
