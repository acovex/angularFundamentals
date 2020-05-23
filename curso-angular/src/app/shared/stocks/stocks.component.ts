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

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
  }

  refresh() {
    this.stocks$ = this.stockService.getStocks();
  }

}
