from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from django.conf.urls import include

import frontend.urls

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(frontend.urls)),

]
