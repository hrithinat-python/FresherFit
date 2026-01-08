from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import HttpResponse
from django.template.loader import render_to_string
from xhtml2pdf import pisa

from .models import Resume, Template
from .serializers import ResumeSerializer, TemplateSerializer

class TemplateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

    @action(detail=True, methods=['get'], url_path='pdf/(?P<template_id>[^/.]+)')
    def generate_pdf(self, request, pk=None, template_id=None):
        try:
            resume = self.get_object()
            template = Template.objects.get(id=template_id)

            # Render the template HTML with resume data
            html_content = render_to_string(template.html_file.path, {'resume': resume})

            # Create PDF
            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="{resume.full_name}_resume.pdf"'

            pisa_status = pisa.CreatePDF(html_content, dest=response)
            if pisa_status.err:
                return Response({'error': 'Error generating PDF'}, status=500)

            return response

        except Template.DoesNotExist:
            return Response({'error': 'Template not found'}, status=404)
        except Exception as e:
            return Response({'error': str(e)}, status=500)
