from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Listing(models.Model):
  title = models.CharField(max_length=250)
  author = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             related_name='listing')
  imglink = models.TextField()
  publishdate = models.DateTimeField(timezone.now)
  location = models.CharField(max_length=250)
  price = models.IntegerField()
  quantitiy = models.IntegerField()
  