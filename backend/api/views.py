from api.models import Articles
from django.shortcuts import render
from django.contrib.auth.models import User
from .serializer import ArticleSerializer,UserSerializer
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated




class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer







# @api_view(['GET','POST'])
# def article_list(request):
#     if request.method == 'GET':
#         articles = Articles.objects.all()
#         serializer = ArticleSerializer(articles, many=True)
#         return Response(serializer.data)


#     elif request.method == 'POST':
#         serializer = ArticleSerializer(data=request.data)
#         authentication_classes =(TokenAuthentication)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET','PUT','DELETE'])
# def article_details(request,pk):
#     try:
#         article = Articles.objects.get(id=pk)
#         authentication_classes =(TokenAuthentication)
#     except Articles.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = ArticleSerializer(article)
#         return Response(serializer.data)
    
#     elif request.method == 'PUT':
#         serializer = ArticleSerializer(article,request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors,status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         article.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)