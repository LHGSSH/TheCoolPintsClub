import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IceCreamDataService } from '../ice-cream-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})

export class SearchpageComponent implements OnInit {

  public formError: string = '';
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

  constructor(private http: HttpClient, private router: Router, public iceCreamDataService: IceCreamDataService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  search(): void {
    if (!this.searchObject.searchQuery) {
      this.formError = "You must enter a search term"
    }
    else {
      this.iceCreamDataService.searchCaller(this.searchObject)
        .then((response) => this.displayResults(response))
        .catch((message) => this.formError = message);
    }
  }

  displayResults(response): void {
    let resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";

    this.searchResults = Array.from(response.result);

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
        let addToCartElement = document.createElement("button");
        addToCartElement.innerHTML =  "<button class='btn addToCart' type='button'>Add to Cart</button>", "text/html";
        addToCartElement.onclick = () => {this.cartService.addToCart(this.searchResults[i]); window.alert(this.searchResults[i].flavor + ' has been added to the cart!');};        
        resultsList.append(addToCartElement);
      }
    }
  }

  checkout(): void{
    this.router.navigate(['/checkout']);
  }
}