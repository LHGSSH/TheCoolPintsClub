import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
    // Inject HttpClient into the CartService constructor: 
    constructor(
        private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage
    ) {}
  items = [];
  orderHistory = [];

  addToCart(product) {
    this.items.push(product);
    this.storage.setItem('cart', JSON.stringify(this.items));
    this.storage.setItem('history', JSON.stringify(this.items));
  }

  getItems() {
    return JSON.parse(this.storage.getItem('cart'));
  }

  getHistory(){
    return JSON.parse(this.storage.getItem('history'));
  }

  clearCart() {
    this.orderHistory.push(this.items);
    this.items = [];
    this.storage.removeItem('cart');
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}