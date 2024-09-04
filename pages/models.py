from django.db import models

# Create your models here.
class ServiceRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=15)
    location = models.CharField(max_length=100)
    service = models.CharField(max_length=100)
