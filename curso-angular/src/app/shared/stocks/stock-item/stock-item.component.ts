import {
  Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges,
  OnDestroy, DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Stock } from '../../models/stock.model';
import { StockService } from '../../services/stock/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit {

  @Input() stock: Stock;
  @Output() private refreshList: EventEmitter<void>;

  constructor(private stockService: StockService, private cdr: ChangeDetectorRef) {
    this.refreshList = new EventEmitter<void>();
  }

  ngOnInit() {

  }

  onToggleFavorite(event: MouseEvent) {
    this.stockService.toggleFavorite(this.stock)
      .subscribe((stock) => {
        this.stock.favorite = !this.stock.favorite;
        this.refreshList.emit();
        this.cdr.detectChanges();
      });
  }


}
