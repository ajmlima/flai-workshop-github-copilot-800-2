from django.test import TestCase

from .models import OctoUser


class OctoUserModelTests(TestCase):
    def test_create_user(self):
        user = OctoUser.objects.create(username='octo', email='octo@example.com')
        self.assertEqual(user.username, 'octo')
