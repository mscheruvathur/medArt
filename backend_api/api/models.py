from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.base import ModelState
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
    hospital_name = models.CharField(max_length=50)
    hospital_email = models.CharField(max_length=100)
    hospital_phone = models.CharField(max_length=20)
    geo_location = models.CharField(max_length=100)
    hospital_city = models.CharField(max_length=50)
    hospital_district = models.CharField(max_length=50)
    hospital_state = models.CharField(max_length=50)
    hospital_address = models.CharField(max_length=100)
    hospital_image = models.ImageField(null = True,blank = True)

    # applicant details
    applicant_name = models.CharField(max_length=50)
    applicant_email = models.CharField(max_length=100)
    applicant_phone = models.CharField(max_length=20)
    applicant_district = models.CharField(max_length=50)
    applicant_state = models.CharField(max_length=50)
    applicant_address = models.CharField(max_length=100)
    applicant_address2 = models.CharField(max_length=100)
    applicant_pincode = models.CharField(max_length=10)
    # applicant_image = models.ImageField(upload_to="image")

    def __str__(self):
        return self.hospital_name



class Doctor(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    qualification = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name




class Services(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    #doctor
            


