import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }