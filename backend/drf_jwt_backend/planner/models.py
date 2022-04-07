from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


class Planner(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.IntegerField()
    



