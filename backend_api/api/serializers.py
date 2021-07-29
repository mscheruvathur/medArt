from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import User ,Hospital
from rest_framework.authtoken.views import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','first_name','last_name','email','phone','adhar_id','username','password']

        extra_kwargs = {'password' : {
                'write_only' : True,
                'required' : True
            }}

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
    

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields ='__all__'

