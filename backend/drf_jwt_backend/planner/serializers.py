from rest_framework import serializers
from .models import Planner

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class PlannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planner
        fields = ['id', 'user', 'first_name', 'last_name', 'city', 'state', 'zipcode', 'user_id']
        depth = 1
