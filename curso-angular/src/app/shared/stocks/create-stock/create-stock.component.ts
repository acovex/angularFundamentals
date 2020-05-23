import { StockService } from './../../services/stock/stock.service';
import { Component, OnInit, Injector } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { Form, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;
  public confirmed: boolean;
  public exchanges: string[];
  public message: string;

  constructor(private stockService: StockService) {
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

  public createStock(stockForm: NgForm) {
    const created = this.stockService.createStock(this.stock);
    if (created) {
      this.message = 'Stock creado con éxito con el código: '
        + this.stock.code;
      this.stock = new Stock('', '', 0, 0, 'NASDAQ');
    } else {
      this.message = 'Stock con el código: ' + this.stock.code
        + ' ya existe';
    }
  }
}
