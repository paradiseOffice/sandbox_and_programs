"""
Django settings for paradise_office project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '$8t8wositkwpp%hnn)41mzp!&fun*^227k@p2fxs!t!&a!!$ap'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'paradise_office.sales_site',
    'paradise_office.sandbox',
    'paradise_office.programs',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'paradise_office.urls'

WSGI_APPLICATION = 'paradise_office.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

TEMPLATE_DIRS = (
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Jotter",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Ledger",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Pages",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Plantt",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Postbox",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Ledger_plus",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Pages_plus",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Plantt_plus",
  "/home/hazel/Documents/paradise_office/paradise_office/programs/Postbox_plus",
  "/home/hazel/Documents/paradise_office/paradise_office/sales_site/",
  "/home/hazel/Documents/paradise_office/paradise_office/sandbox/",
)
