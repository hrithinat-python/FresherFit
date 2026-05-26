from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResumeViewSet, TemplateViewSet

router = DefaultRouter()
router.register(r'resume', ResumeViewSet)
router.register(r'templates', TemplateViewSet, basename='template')

urlpatterns = [
    path('', include(router.urls)),
]
