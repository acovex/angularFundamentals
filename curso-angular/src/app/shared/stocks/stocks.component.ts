import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  public title: string;
  public stock: Stock;

  constructor() {
    this.title = 'Stock Market App';
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  public toggleFavorite(stock: Stock) {
    stock.favorite = !stock.favorite;
    console.log('Cambiando el el estado del stock', this.stock, stock);
  }

}
