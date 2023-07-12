import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class ProductsModule { }
