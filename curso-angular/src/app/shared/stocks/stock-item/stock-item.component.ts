import {
  Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges,
  OnDestroy, DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit{

  @Input() stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit() {
    console.log('Stock Item Component - On Init');
  }

  public toogleFavoriteView(event: MouseEvent) {
    this.toggleFavorite.emit(this.stock);
  }

  public changeStockPrice() {
    this.stock.price += 5;
  }


}
