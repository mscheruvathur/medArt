from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import User ,Hospital
from rest_framework.authtoken.views import Token
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    _id = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id','_id','username','email', 'name', 'isAdmin']
    

    def get_isAdmin(self,obj):
        return obj.is_staff


    def get__id(self,obj):
        return obj.id

    def get_name(self,obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id','_id','username','email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

        # extra_kwargs = {'password' : {
        #         'write_only' : True,
        #         'required' : True
        #     }}

    # def create(self,validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     Token.objects.create(user=user)
    #     return user
    

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields ='__all__'

