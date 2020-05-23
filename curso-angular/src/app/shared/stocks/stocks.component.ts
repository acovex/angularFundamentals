import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../models/stock.model';
import { StockService } from '../services/stock/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  public title: string;

  public stocks: Stock[];
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  public onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stockService.toggleFavorite(stock);
  }





}
