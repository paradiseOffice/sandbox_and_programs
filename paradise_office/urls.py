from django.conf.urls import patterns, include, url

#from django.contrib import admin
#admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'paradise_office.sales_site.views.index', name='index'),
    # url(r'^blog/', include('blog.urls')),

    #url(r'^forums/', include('paradise_office.sales_site.views.forum')),
)
