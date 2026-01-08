from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResumeViewSet, TemplateViewSet

router = DefaultRouter()
router.register(r'resume', ResumeViewSet)
router.register(r'resume/templates', TemplateViewSet, basename='template')

urlpatterns = [
    path('api/', include(router.urls)),
]
