import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product-list/product/product.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'products', component: ProductListComponent },
    {path: 'products/:productId', component: ProductComponent },
];