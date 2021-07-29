from django.shortcuts import render
from django.http import HttpResponse, request
from .models import User, Hospital
from rest_framework import viewsets
from .serializers import UserSerializer, HospitalSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class HospitalViewSet(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer


def index(requst):
    return HttpResponse("yes its working properly")
