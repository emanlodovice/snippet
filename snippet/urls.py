from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns

from snippet import views


urlpatterns = [
    url(r'^snippets/$', views.snippet_list),
    url(r'^snippet/(?P<pk>\d+)/$', views.snippet_detail)
]

urlpatterns = format_suffix_patterns(urlpatterns)
