"""alpha URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework import routers

# # Accounting
# from accounting.accounts.api import AccountViewSet
# from accounting.entries.api import EntryViewSet, EntryDetailViewSet
# from accounting.fiscalPeriods.api import FiscalPeriodViewSet
# from accounting.saleBills.api import SaleBillViewSet, SaleBillDetailViewSet

# Common
from common.clients.api import ClientViewSet
from common.companies.api import CompanyViewSet
from common.recipes.api import RecipeViewSet, RecipeDetailViewSet
from common.products.api import ProductViewSet, ProductDepartmentViewSet, ProductSubDepartmentViewSet, ProductForSaleViewSet
from common.profiles.api import ProfileViewSet, UserViewSet


router = routers.DefaultRouter()

# # Accounting
# router.register(r'accounts', AccountViewSet)
# router.register(r'entries', EntryViewSet)
# router.register(r'entry_details', EntryDetailViewSet)
# router.register(r'fiscal_periods', FiscalPeriodViewSet)
# router.register(r'sale_bills', SaleBillViewSet)
# router.register(r'sale_bill_details', SaleBillDetailViewSet)

# Common
router.register(r'clients', ClientViewSet)
router.register(r'companies', CompanyViewSet)
router.register(r'recipes', RecipeViewSet)
router.register(r'recipedetails', RecipeDetailViewSet)
router.register(r'products', ProductViewSet)
router.register(r'productsforsale', ProductForSaleViewSet)
router.register(r'product_departments', ProductDepartmentViewSet)
router.register(r'product_subdepartments', ProductSubDepartmentViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^clients/', include('common.clients.urls')),
    url(r'^products/', include('common.products.urls')),

    url(r'^pos/$', login_required(TemplateView.as_view(template_name="poss/sale.jade"))),
    url(r'^$', login_required(TemplateView.as_view(template_name="layout/landing.py.jade"))),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)\
              + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
