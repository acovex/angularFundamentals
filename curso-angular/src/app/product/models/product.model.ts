export class Product {
  public quantity: number;

  constructor(public name: string, public price: number, public img: string, public numberStock: number) {
    this.quantity = 0;
  }


  isAvailable(): boolean {
    return this.numberStock > this.quantity;
  }

}
