# Generated by Django 2.0.1 on 2019-06-11 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0002_auto_20190610_1312'),
    ]

    operations = [
        migrations.AddField(
            model_name='rsvp',
            name='not_coming',
            field=models.BooleanField(default=False),
        ),
    ]
