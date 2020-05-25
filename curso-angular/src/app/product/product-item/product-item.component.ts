import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() private restProduct: EventEmitter<Product>;
  @Output() private sumProduct: EventEmitter<Product>;

  constructor() {
    this.restProduct = new EventEmitter<Product>();
    this.sumProduct = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  public sum() {
    this.sumProduct.emit(this.product);
  }

  public res() {
    this.restProduct.emit(this.product);
  }


}
