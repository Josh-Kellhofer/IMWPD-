from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Planner
from .serializers import PlannerSerializer
from django.contrib.auth.models import User


class PlannerList(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        planner = Planner.objects.all()
        serializer = PlannerSerializer(planner, many=True)
        return Response(serializer.data)