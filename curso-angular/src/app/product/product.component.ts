import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public code: number;
  public maxNumber: number;

  constructor() {
    this.products = [];
    this.code = 0;
    this.maxNumber = 20;
  }

  ngOnInit() {
  }

  public addProd() {
    this.products.push(new Product('Producto estrella', 12, 'https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg?w=800&quality=85', 5, this.code++));
  }

  public quitProd() {
    this.products.splice(this.products.length - 1, 1);
  }

}
