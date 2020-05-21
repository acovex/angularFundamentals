import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stocks: Stock[];
  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Third Stock Company', 'LSD', 15, 30),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
  }

  public toggleFavorite(event: MouseEvent, indexSelected: number) {
    console.log('Cambiando el el estado del stock', event);
    this.stocks[indexSelected].favorite = !this.stocks[indexSelected].favorite;
  }

  public trackStockByCode(index: number, stock: Stock): string {
    return stock.code;
  }
}
