from django.urls import path
from planner import views

urlpatterns = [
  path('', views.planner_list),
  path('', views.planner_detail),
]