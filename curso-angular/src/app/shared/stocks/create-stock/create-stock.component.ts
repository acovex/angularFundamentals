import { StockService } from './../../services/stock/stock.service';
import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { Form, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {

  @Output() private refreshList: EventEmitter<void>;

  public stock: Stock;
  public confirmed: boolean;
  public exchanges: string[];
  public message: string;

  constructor(private stockService: StockService) {
    this.refreshList = new EventEmitter<void>();
    this.confirmed = false;
    this.exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
    this.initializeStock();
  }

  ngOnInit() {
  }

  private initializeStock() {
    this.stock = {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };
  }

  public setStockPrice(price: number) {
    if (price !== this.stock.price) {
      this.stock.previousPrice = this.stock.price;
    }
    this.stock.price = price;
  }

  public createStock(stockForm: NgForm) {
    this.stockService.createStock(this.stock)
      .subscribe((result: any) => {
        this.message = result.msg;
        this.initializeStock();
        this.refreshList.emit();
      }, (err) => {
        this.message = err.error.msg;
      });
  }

}
