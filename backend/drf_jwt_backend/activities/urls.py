from django.urls import path
from activities import views

urlpatterns = [
  path('', views.activities_list),
  path('', views.activities_detail),
]