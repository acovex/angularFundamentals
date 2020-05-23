import { Injectable } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StockService {

  constructor(private http: HttpClient) { }

  public getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock');
  }

  public createStock(stock: Stock): Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  public toggleFavorite(stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>('/api/stock/' + stock.code,
      {
        favorite: !stock.favorite
      });
  }
}
