from django.conf.urls import url
from snippet import views


urlpatterns = [
    url(r'^snippets/$', views.snippet_list),
    url(r'^snippet/(?P<pk>\d+)/$', views.snippet_detail)
]
