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
    // This will update the value in the stock item component
    // Because it is triggered as a result of an event
    // binding from the stock item component
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    // This will update the value in the stock item component
    // Because we are creating a new reference for the stock input
    this.stock = new Stock('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80);
  }

  changeStockPrice(cambiandoReferencia?: boolean) {
    // This will not update the value in the stock item component
    // because it is changing the same reference and angular will
    // not check for it in the OnPush change detection strategy.
    this.stock.price += 10;
    if (cambiandoReferencia) {
    // This will update the value in the stock item component
    // Because we are creating a new reference for the stock input
      const favorite = this.stock.favorite;
      this.stock = new Stock(this.stock.name, this.stock.code, this.stock.price, this.stock.previousPrice);
      this.stock.favorite = favorite;
    }
  }


}
