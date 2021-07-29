from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.enums import Choices
from django.db.models.fields import CharField
from django.db.models.fields.files import ImageField


class User(AbstractUser):
    ROLE_CHOICES = (
        ("user" , "user"),
        ("admin" , "admin"),
        ("doctor" , "doctor"),
        ("h_admin" , "h_admin")
    )

    role = models.CharField(max_length = 20, choices=ROLE_CHOICES,default="user")
    phone = models.IntegerField(null=True)
    adhar_id = models.IntegerField(null=True)
    email = models.EmailField(max_length=100)



class Hospital(models.Model):
    title = models.CharField(max_length=50)
    portal = models.CharField(max_length=50)
    hospital_name = models.CharField(max_length=100)
    geo_location = models.CharField(max_length=50)
    hospital_emial = models.EmailField()
    hospital_phone = models.IntegerField()
    hospital_district = models.CharField(max_length=200)
    hospital_state = models.CharField(max_length=20)
    hospital_address1 = models.CharField(max_length=100)
    hospital_address2 = models.CharField(max_length=100)
    # image = models.ImageField(upload_to='images')

    # applicant details
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    applicant_emial = models.EmailField()
    applicant_phone = models.IntegerField()
    applicant_state = models.CharField(max_length=20)
    applicant_district = models.CharField(max_length=20)
    applicant_address1 = models.CharField(max_length=100)
    applicant_address2 = models.CharField(max_length=100)

    def __str__(self):
        return self.hospital_name


class Services(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
            


