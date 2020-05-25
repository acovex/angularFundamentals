import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('Producto estrella', 12, 'https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg?w=800&quality=85', 5);
  }

  sum() {
    this.product.quantity++;
  }
  res() {
    this.product.quantity--;
  }


}
