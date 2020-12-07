import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';
import { IceCreamDataService } from '../ice-cream-data.service';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    user: User;
    deliveryDate: String;

    constructor(
        private cartService: CartService, private authService: AuthenticationService, private iceCreamDataService: IceCreamDataService, private router: Router
      ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.user = this.authService.getCurrentUser();
  }

  checkout() {
    let deliveryDateInput = document.getElementById("deliveryDate") as HTMLInputElement;
    this.deliveryDate = deliveryDateInput.value;

    let order = {
      user: this.user,
      items: this.items,
      deliveryDate: this.deliveryDate
    }

    this.iceCreamDataService.checkoutCaller(order)
    .then((response) => window.alert("Checkout successful!"))
    .then(() => this.cartService.clearCart())
    .then(() => this.router.navigate(['/']))
    .catch((message) => window.alert("Error checking out. Please try again."));
  }

}