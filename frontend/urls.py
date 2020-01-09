from django.conf.urls import url

from frontend import views

urlpatterns = [
    url(r'api/rsvp/', views.RSVPView.as_view(), name='rsvp'),
    url(r'^.*', views.ReactView.as_view(), name='react'),
]
