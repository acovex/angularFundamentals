import { Stock } from './../../models/stock.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFavourite'
})
export class StockFavouritePipe implements PipeTransform {

  transform(value: Stock[], isFavourite: boolean = true): Stock[] {
    return (value || []).filter(it => it.favorite === isFavourite);
  }

}
