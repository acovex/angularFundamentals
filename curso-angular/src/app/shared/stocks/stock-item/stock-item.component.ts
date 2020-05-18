import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  public toggleFavorite(event: MouseEvent) {
    console.log('Cambiando el el estado del stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
