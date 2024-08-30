from .base import *

DEBUG = True

SECRET_KEY = "django-insecure-uk1f$82+tq8sllc2z67$t+3uvdvos#-pl)1$q8&vaf%d!m*c@3"

ALLOWED_HOSTS = ["localhost", "127.0.0.1"]


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
