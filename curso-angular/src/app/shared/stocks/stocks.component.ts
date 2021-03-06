import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../models/stock.model';
import { StockService } from '../services/stock/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  public title: string;
  public stocks$: Observable<Stock[]>;

  public date: string;
  public decimalNumber: number;
  public currencyNumber: number;

  constructor(private stockService: StockService) {
    this.date = new Date().toISOString();
    this.decimalNumber = 1231.4785;
    this.currencyNumber = 14.78;
  }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
  }

  refresh() {
    this.stocks$ = this.stockService.getStocks();
  }

}
