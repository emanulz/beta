# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-24 14:59
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subrecipe',
            name='product',
        ),
        migrations.RemoveField(
            model_name='subrecipe',
            name='recipe',
        ),
        migrations.AlterModelOptions(
            name='recipedetail',
            options={'ordering': ['id'], 'verbose_name': 'Detalle de receta', 'verbose_name_plural': 'Detalles de receta'},
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='productForSale',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='recipes',
        ),
        migrations.AddField(
            model_name='recipe',
            name='isSingle',
            field=models.BooleanField(default=True, verbose_name='Venta Directa?'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='product',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='products.Product', verbose_name='Producto'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recipedetail',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Product', verbose_name='Producto Bodega'),
        ),
        migrations.AddField(
            model_name='recipedetail',
            name='recipe',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='recipes.Recipe', verbose_name='Receta'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='recipedetail',
            name='qty',
            field=models.FloatField(default=1, null=True, verbose_name='Cantidad'),
        ),
        migrations.AlterUniqueTogether(
            name='recipedetail',
            unique_together=set([]),
        ),
        migrations.DeleteModel(
            name='SubRecipe',
        ),
        migrations.RemoveField(
            model_name='recipedetail',
            name='from_recipe',
        ),
        migrations.RemoveField(
            model_name='recipedetail',
            name='to_recipe',
        ),
    ]
