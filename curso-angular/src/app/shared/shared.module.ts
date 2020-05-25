import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { StocksComponent } from './stocks/stocks.component';
import { StockItemComponent } from './stocks/stock-item/stock-item.component';
import { CreateStockComponent } from './stocks/create-stock/create-stock.component';
import { FormsModule } from '@angular/forms';
import { StockService } from './services/stock/stock.service';
import { HttpClientModule } from '@angular/common/http';
import { StockFavouritePipe } from './pipes/stock-favourite/stock-favourite.pipe';
import { PriceNumberPipe } from './pipes/price-number.pipe';


@NgModule({
  declarations: [StocksComponent, StockItemComponent, CreateStockComponent, StockFavouritePipe, PriceNumberPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    StocksComponent
  ],
  providers: [StockService, DecimalPipe, DatePipe, CurrencyPipe, StockFavouritePipe, PriceNumberPipe]
})
export class SharedModule { }
