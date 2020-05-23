import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks/stocks.component';
import { StockItemComponent } from './stocks/stock-item/stock-item.component';
import { CreateStockComponent } from './stocks/create-stock/create-stock.component';
import { FormsModule } from '@angular/forms';
import { StockService } from './services/stock/stock.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [StocksComponent, StockItemComponent, CreateStockComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    StocksComponent
  ],
  providers: [StockService]
})
export class SharedModule { }
