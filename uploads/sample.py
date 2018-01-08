from django.http import HttpResponse


def index(req):
  print(req)
  return HttpResponse("hieieiiei")


urlpatterns = [
  url(r'/', index()),
]