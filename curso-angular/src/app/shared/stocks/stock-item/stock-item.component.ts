import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses: { [key: string]: any };
  public stockStyles: { [key: string]: string };
  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    const diff = (this.stock.price / this.stock.previousPrice) - 1;
    const largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange
    };
    this.stockStyles = {
      color: this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '1.2em' : '0.8em'
    };
  }

  public toggleFavorite(event: MouseEvent) {
    console.log('Cambiando el el estado del stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
