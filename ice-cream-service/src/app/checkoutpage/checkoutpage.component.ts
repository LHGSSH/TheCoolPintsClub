import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IceCreamDataService } from '../ice-cream-data.service';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {

  public formError: string = '';
  //public cartData: Object[];
  public cartData: Observable<Object[]>;
  public searchResults = [
    {
      "flavor": "nope",
      "stock": 0,
      "price": 0.00
    }
  ]
  public searchObject = {
    searchQuery: ''
  }

  public userCart: String[];

  constructor(private http: HttpClient, private router: Router, public iceCreamDataService: IceCreamDataService) { }

  ngOnInit(): void {
    this.http.get('/checkout');

    // for(let i = 0; i < this.cartData.length; i++){
    //   console.log(this.userCart[i]);
    // }
    console.log("in igOnInit");
    // this.cartData = this.iceCreamDataService.getCartData();
  }
  
  // getHeroes (): Observable<Object[]> {
  //   return this.http.get<Object[]>('/search');
  // }

  search(): void {
    if (!this.searchObject.searchQuery) {
      this.formError = "You must enter a search term"
    }
    else {
      this.iceCreamDataService.searchCaller(this.searchObject)
        .then((response) => this.displayResults(response))
        .catch((message) => this.formError = message);
    }

    // for(let i = 0; i < this.cartData.length; i++){
    //   console.log("in search");
    //   console.log(this.cartData[i]);
    // }

  }

  displayResults(response): void {

    let resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";

    this.searchResults = Array.from(response.result);
    console.log(this.searchResults);

    if (this.searchResults === undefined || this.searchResults.length == 0) {
      this.formError = "No results found";
    }
    else {
      for (let i = 0; i < this.searchResults.length; i++) {
        let titleElement = document.createElement("li");
        titleElement.innerHTML = "<li><b>Flavor:</b> " + this.searchResults[i].flavor + "</li>", "text/html";
        resultsList.append(titleElement);
        let stockElement = document.createElement("li");
        stockElement.innerHTML = "<li><b>In Stock:</b> " + this.searchResults[i].stock + "</li>", "text/html";
        resultsList.append(stockElement);
        let priceElement = document.createElement("li");
        priceElement.innerHTML = "<li><b>Price:</b> $" + this.searchResults[i].price + "</li><br/>", "text/html";
        resultsList.append(priceElement);
      }
    }
  }

  displayCart(): void{
    
  }

}
