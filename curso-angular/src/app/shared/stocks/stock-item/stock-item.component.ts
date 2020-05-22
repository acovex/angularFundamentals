import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  @Input() stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit() {
  }

  public toogleFavoriteView(event: MouseEvent) {
    this.toggleFavorite.emit(this.stock);
  }

}
