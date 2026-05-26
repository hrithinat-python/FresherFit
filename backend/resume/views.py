from rest_framework import viewsets, status
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

    # ✅ FIXED CREATE METHOD
    def create(self, request, *args, **kwargs):
        print("📥 Incoming Data:", request.data)

        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            print("❌ Validation Errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)

        print("✅ Data Saved Successfully")
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # ✅ PDF GENERATION (unchanged, but cleaned)
    @action(detail=True, methods=['get'], url_path='pdf/(?P<template_id>[^/.]+)')
    def generate_pdf(self, request, pk=None, template_id=None):
        try:
            resume = self.get_object()
            template = Template.objects.get(id=template_id)

            html_content = render_to_string(
                template.html_file.path,
                {'resume': resume}
            )

            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="{resume.full_name}_resume.pdf"'

            pisa_status = pisa.CreatePDF(html_content, dest=response)

            if pisa_status.err:
                return Response({'error': 'Error generating PDF'}, status=500)

            return response

        except Template.DoesNotExist:
            return Response({'error': 'Template not found'}, status=404)

        except Exception as e:
            print("❌ PDF Error:", str(e))
            return Response({'error': str(e)}, status=500)