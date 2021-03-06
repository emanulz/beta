# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-02-24 01:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounting', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='account',
            options={'ordering': ['id'], 'verbose_name': 'Cuenta Mayor', 'verbose_name_plural': 'Cat\xe1logo - 3. Cuentas Mayores'},
        ),
        migrations.AlterModelOptions(
            name='accountcategory',
            options={'ordering': ['id'], 'verbose_name': 'Tipo de Cuenta', 'verbose_name_plural': 'Cat\xe1logo - 1. Tipos de Cuentas'},
        ),
        migrations.AlterModelOptions(
            name='accountgroup',
            options={'ordering': ['id'], 'verbose_name': 'Grupo de Cuenta', 'verbose_name_plural': 'Cat\xe1logo - 2. Grupos de Cuentas'},
        ),
        migrations.AlterModelOptions(
            name='detailaccount',
            options={'ordering': ['id'], 'verbose_name': 'Cuenta Detalle', 'verbose_name_plural': 'Cat\xe1logo - 5. Cuentas Detalle'},
        ),
        migrations.AlterModelOptions(
            name='subaccount',
            options={'ordering': ['id'], 'verbose_name': 'Sub-Cuenta', 'verbose_name_plural': 'Cat\xe1logo - 4. Sub-Cuentas'},
        ),
        migrations.AddField(
            model_name='subaccount',
            name='movements',
            field=models.BooleanField(default=False, verbose_name='Acepta Movimiento?'),
        ),
    ]
