# Generated by Django 3.2.5 on 2021-08-01 09:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20210801_0954'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hospital',
            name='applicant_city',
        ),
    ]
