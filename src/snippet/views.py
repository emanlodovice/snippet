# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.views.generic import View
from django.http import HttpResponseForbidden, HttpResponse
from django.contrib.auth import login, authenticate, logout

from rest_framework import permissions
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework import renderers
from rest_framework import viewsets

from snippet.models import Snippet
from snippet.serializers import SnippetSerializer, UserSerializer
from snippet.permissions import IsOwnerOrReadOnly


class SnippetViewSet(viewsets.ModelViewSet):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        user = None
        if self.request.user.is_authenticated:
            user = self.request.user
        serializer.save(owner=user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class Login(View):

    def post(self, request):
        if request.user.is_authenticated():
            return HttpResponseForbidden()
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return HttpResponse('Success', status=200)
        return HttpResponse(status=400)
