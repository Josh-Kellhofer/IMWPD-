from django.urls import path
from activities import views

urlpatterns = [
  path('', views.ActivitiesList.as_view())
]