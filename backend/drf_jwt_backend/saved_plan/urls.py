from django.urls import path
from saved_plan import views

# urlpatterns = [
#     path('', views.planner_activities),
# ]

urlpatterns = [
  path('', views.SavedPlanList.as_view())
]

