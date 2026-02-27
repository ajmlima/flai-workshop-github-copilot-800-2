from django.core.management.base import BaseCommand
from django.utils import timezone

from octofit_tracker.models import Activity, LeaderboardEntry, OctoUser, Team, Workout


class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        LeaderboardEntry.objects.all().delete()
        Team.objects.all().delete()
        OctoUser.objects.all().delete()

        users = {
            'iron_man': OctoUser.objects.create(
                username='ironman',
                email='ironman@marvel.com',
                display_name='Iron Man',
            ),
            'captain_marvel': OctoUser.objects.create(
                username='captainmarvel',
                email='captain.marvel@marvel.com',
                display_name='Captain Marvel',
            ),
            'black_widow': OctoUser.objects.create(
                username='blackwidow',
                email='black.widow@marvel.com',
                display_name='Black Widow',
            ),
            'superman': OctoUser.objects.create(
                username='superman',
                email='superman@dc.com',
                display_name='Superman',
            ),
            'batman': OctoUser.objects.create(
                username='batman',
                email='batman@dc.com',
                display_name='Batman',
            ),
            'wonder_woman': OctoUser.objects.create(
                username='wonderwoman',
                email='wonder.woman@dc.com',
                display_name='Wonder Woman',
            ),
        }

        marvel_team = Team.objects.create(
            name='Team Marvel',
            description='Earth\'s mightiest heroes.',
            members=[str(users['iron_man'].id), str(users['captain_marvel'].id), str(users['black_widow'].id)],
        )
        dc_team = Team.objects.create(
            name='Team DC',
            description='Justice League champions.',
            members=[str(users['superman'].id), str(users['batman'].id), str(users['wonder_woman'].id)],
        )

        now = timezone.now()
        Activity.objects.bulk_create(
            [
                Activity(
                    user_id=str(users['iron_man'].id),
                    activity_type='Arc Reactor Run',
                    duration_minutes=45,
                    calories_burned=420,
                    performed_at=now,
                    notes='Prototype endurance test.',
                ),
                Activity(
                    user_id=str(users['captain_marvel'].id),
                    activity_type='Photon Flight',
                    duration_minutes=35,
                    calories_burned=380,
                    performed_at=now,
                    notes='Interstellar sprint session.',
                ),
                Activity(
                    user_id=str(users['black_widow'].id),
                    activity_type='Spy Circuit',
                    duration_minutes=55,
                    calories_burned=500,
                    performed_at=now,
                    notes='Agility and balance work.',
                ),
                Activity(
                    user_id=str(users['superman'].id),
                    activity_type='Metropolis Laps',
                    duration_minutes=30,
                    calories_burned=350,
                    performed_at=now,
                    notes='Speed training.',
                ),
                Activity(
                    user_id=str(users['batman'].id),
                    activity_type='Gotham Rooftops',
                    duration_minutes=40,
                    calories_burned=410,
                    performed_at=now,
                    notes='Stealth and parkour.',
                ),
                Activity(
                    user_id=str(users['wonder_woman'].id),
                    activity_type='Amazon Drills',
                    duration_minutes=60,
                    calories_burned=540,
                    performed_at=now,
                    notes='Strength and endurance.',
                ),
            ]
        )

        Workout.objects.bulk_create(
            [
                Workout(
                    user_id=str(users['iron_man'].id),
                    title='Stark Strength Protocol',
                    focus_area='Strength',
                    duration_minutes=50,
                    difficulty='Advanced',
                ),
                Workout(
                    user_id=str(users['captain_marvel'].id),
                    title='Cosmic Core Blast',
                    focus_area='Core',
                    duration_minutes=40,
                    difficulty='Intermediate',
                ),
                Workout(
                    user_id=str(users['superman'].id),
                    title='Kryptonian Conditioning',
                    focus_area='Cardio',
                    duration_minutes=45,
                    difficulty='Advanced',
                ),
                Workout(
                    user_id=str(users['wonder_woman'].id),
                    title='Amazon Warrior Flow',
                    focus_area='Mobility',
                    duration_minutes=35,
                    difficulty='Intermediate',
                ),
            ]
        )

        LeaderboardEntry.objects.bulk_create(
            [
                LeaderboardEntry(team_name=marvel_team.name, points=980),
                LeaderboardEntry(team_name=dc_team.name, points=940),
            ]
        )

        self.stdout.write(self.style.SUCCESS('octofit_db populated with superhero test data.'))
