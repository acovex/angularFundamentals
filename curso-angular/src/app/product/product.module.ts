import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductItemComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
