import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;

  constructor() {
    this.stock = new Stock('test', '', 0, 0);
  }

  ngOnInit() {
  }

}
