from django.urls import path
from django.urls.conf import include
from .views import index,HospitalViewSet,MyTokenObtainPairView,getUserProfile,getUSers,registerUser,getHospitals,getHospital
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings

from api import views


router = routers.DefaultRouter()
# router.register('users',UserViewSet)
router.register('hpt',HospitalViewSet)


urlpatterns = [
    path('api/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/users/register/',registerUser),
    path('api/hospitals/',getHospitals),
    path('api/hospital/<str:pk>',getHospital),
    path('api/users/profile',getUserProfile,name="users-profile"),
    path('api/users/',getUSers),
    path('api/',include(router.urls)),
    path('',index)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)