import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { products } from '../products';
import { CartService } from '../cart.service';
import { Inventory } from '../inventory';

@Component({
    template: ''
  })
  
export class ProductDetailsComponent implements OnInit {
    constructor(
      private route: ActivatedRoute,
      private cartService: CartService
    ) { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    addToCart(product) {
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
    }
      
  }