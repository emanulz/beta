# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

urlpatterns = [

    url(r'^products/', include('sales.urlFiles.products')),
    url(r'', include('sales.urlFiles.api')),
    url(r'^pos/$', login_required(TemplateView.as_view(template_name="sales/pos/sale.py.jade"))),
    url(r'^pos2/$', login_required(TemplateView.as_view(template_name="sales/pos/saleReact.py.jade"))),

    ]
