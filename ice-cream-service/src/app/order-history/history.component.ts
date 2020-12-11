import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';
import { IceCreamDataService } from '../ice-cream-data.service';
import { User } from '../user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
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
}