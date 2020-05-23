import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../models/stock.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  public title: string;
  public stock: Stock;
  private counter: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.title = 'Stock Market App';
    this.counter = 1;
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80);
  }

  onToggleFavorite(stock: Stock) {
    this.stock.favorite = !this.stock.favorite;
  }





}
