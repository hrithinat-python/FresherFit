from django.contrib import admin
from .models import Resume, Template

# Register your models
@admin.register(Template)
class TemplateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'html_file', 'preview_image')

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'email', 'phone', 'created_at')
    readonly_fields = ('created_at',)