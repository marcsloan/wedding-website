from django.core.serializers.json import DjangoJSONEncoder
from django.db import models
from django.contrib.postgres.fields import JSONField

class RSVP(models.Model):
    name = models.CharField(max_length=1000, null=False)
    main = models.CharField(max_length=1000, null=False)
    dessert = models.CharField(max_length=1000, null=False)
    additional = models.CharField(max_length=1000, null=False)
    not_coming = models.BooleanField(default=False)

