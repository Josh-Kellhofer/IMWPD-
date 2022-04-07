from django.urls import path
from planner import views

urlpatterns = [
  path('', views.PlannerList.as_view())
]