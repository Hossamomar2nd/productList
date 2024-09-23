import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '**', component: PageNotFoundComponent },
];
