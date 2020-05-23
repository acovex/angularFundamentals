import { Injectable } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StockService {

  private stocks: Stock[];

  constructor(private http: HttpClient) {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE')
    ];
  }

  public getStocks(): Stock[] {
    return this.stocks;
  }

  public createStock(stock: Stock): boolean {
    if (this.stocks.some(each => each.code === stock.code)) {
      return false;
    }
    this.stocks.push(stock);
    return true;
  }

  public toggleFavorite(stock: Stock): void {
    const foundStock = this.stocks.find(each => each.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
  }
}
