import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from '../models/stock.model';

@Pipe({
  name: 'priceNumber'
})
export class PriceNumberPipe implements PipeTransform {

  transform(value: Stock[], condition: string, price: number): Stock[] {
    if (price || price === 0) {
      return (value || []).filter((item => {
        switch (condition) {
          case 'min':
            return item.price > price;
          case 'max':
            return item.price < price;
          case 'equal':
            return item.price === price;
          default: return true;
        }
      }));
    }
    return value;
  }

}
