# Generated by Django 3.2.5 on 2021-07-26 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_user_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='adhar_id',
            field=models.IntegerField(max_length=20),
        ),
    ]