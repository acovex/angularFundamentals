import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks/stocks.component';
import { StockItemComponent } from './stocks/stock-item/stock-item.component';



@NgModule({
  declarations: [StocksComponent, StockItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StocksComponent
  ]
})
export class SharedModule { }
