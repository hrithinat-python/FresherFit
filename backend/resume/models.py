from django.db import models
from django.contrib.auth.models import User

class Template(models.Model):
    name = models.CharField(max_length=100)
    html_file = models.FileField(upload_to='templates/')
    preview_image = models.ImageField(upload_to='template_previews/')
    style_file = models.FileField(upload_to='template_styles/', null=True, blank=True)

    def __str__(self):
        return self.name

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=100)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)

    # JSONFields for structured data
    education = models.JSONField(default=list, null=True, blank=True)
    experience = models.JSONField(default=list, null=True, blank=True)
    skills = models.JSONField(default=list, null=True, blank=True)
    projects = models.JSONField(default=list, null=True, blank=True)
    certifications = models.JSONField(default=list, null=True, blank=True)
    training = models.JSONField(default=list, null=True, blank=True)

    template = models.ForeignKey(Template, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
