import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//   static addToCart(arg0: any) {
//     throw new Error('Method not implemented.');
//   }
//   static addToCart(arg0: { flavor: string; inStock: boolean; }): MouseEvent {
//     // throw new Error('Method not implemented.');
//     CartService.addToCart(flavor)
//     // return true;
//   }

    // Inject HttpClient into the CartService constructor: 
    constructor(
        private http: HttpClient
    ) {}
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}