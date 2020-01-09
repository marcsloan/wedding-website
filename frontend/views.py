import json

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from frontend.models import RSVP

class ReactView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        return render(request, 'frontend/react.html', {
            'globals': json.dumps({
                'STATIC_URL': settings.STATIC_URL,
            }),
        })


class RSVPView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        RSVP.objects.create(
            name=request.data['name'],
            main=request.data['mainMeal'],
            dessert=request.data['dessert'],
            additional=request.data['additional'],
            not_coming=request.data['not_coming'],
        )
        return JsonResponse({'status': 'OK'}, status=200)