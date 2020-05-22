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
export class StockItemComponent implements OnInit, OnChanges,
  OnDestroy, DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit {

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

  public changeStockPrice() {
    this.stock.price += 5;
  }

  ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
  }
  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
  }
  ngOnChanges(changes: any): void {
    console.log('Stock Item Component - On Changes - ', changes);
  }

}
