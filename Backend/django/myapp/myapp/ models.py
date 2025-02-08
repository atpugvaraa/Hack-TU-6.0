from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Listing(models.Model):
  title = models.CharField(max_length=250)
  author = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             related_name='listings')
  imglink = models.TextField()
  publish = models.DateTimeField(default=timezone.now)
  location = models.CharField(max_length=250)
  price = models.IntegerField()
  quantitiy = models.IntegerField()
  tags = models.ManyToManyField(Tag, related_name='listings', blank=True)

  def __str__(self):
      return self.title
  