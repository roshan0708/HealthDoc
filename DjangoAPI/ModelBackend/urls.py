from django.contrib import admin
from django.urls import path
from PredictAPI import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('predictHeart', csrf_exempt(
        views.predictHeart), name="Score Application"),
    path('predictLiver', csrf_exempt(
        views.predictLiver), name="Score Application"),
    # path('predictKidney', csrf_exempt(
    #     views.predictKidney), name="Score Application"),
]
