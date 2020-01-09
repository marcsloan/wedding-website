from django.contrib import admin

from frontend.models import RSVP


class RSVPAdmin(admin.ModelAdmin):
    list_display = ('name', 'main', 'dessert', 'additional', 'not_coming')

admin.site.register(RSVP, RSVPAdmin)
