from django.urls import path
from django.urls.conf import include
from .views import index,UserViewSet,HospitalViewSet
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.register('users',UserViewSet)
router.register('hospital',HospitalViewSet)


urlpatterns = [
    path('api/',include(router.urls)),
    path('',index)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)