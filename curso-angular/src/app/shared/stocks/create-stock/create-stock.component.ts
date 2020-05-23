import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;
  public confirmed: boolean;
  public exchanges: string[];

  constructor() {
    this.confirmed = false;
    this.exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  ngOnInit() {
  }

  public setStockPrice(price: number) {
    if (price !== this.stock.price) {
      this.stock.previousPrice = this.stock.price;
    }
    this.stock.price = price;
  }

  public createStock() {
    console.log('Creando stock ', this.stock);
  }

}
