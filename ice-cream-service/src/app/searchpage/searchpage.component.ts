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
      "inStock": false
    }
  ]
  public searchObject = {
    searchQuery: ''
  }
  // addToCartElement: any;

  // constructor(
  //   private route: ActivatedRoute,
  //   private cartService: CartService
  // ) { }

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
    console.log(this.searchResults);

    if (this.searchResults === undefined || this.searchResults.length == 0) {
      this.formError = "No results found";
    }
    else {
      for (let i = 0; i < this.searchResults.length; i++) {
        let titleElement = document.createElement("li");
        titleElement.innerHTML = "<li><b>Flavor:</b> " + this.searchResults[i].flavor + "</li>", "text/html";
        resultsList.append(titleElement);
        let inStockElement = document.createElement("li");
        inStockElement.innerHTML = "<li><b>In Stock:</b> " + this.searchResults[i].inStock + "</li><br/>", "text/html";
        resultsList.append(inStockElement);
        // <button (click)="addToCart(product)">Buy</button>

        // <input type="button"onClick={() => this.fetchData("dfd")} value="Search" />
        let addToCartElement = document.createElement("button");
        addToCartElement.innerHTML =  "<button class='btn addToCart' type='button'>Add to Cart</button>", "text/html";
        
        addToCartElement.onclick = () => {this.cartService.addToCart(this.searchResults[i]); console.log("item added")};        
        // addToCartElement.onclick(this.cartService.addToCart(this.searchResults[i]));
        // addToCartElement.onclick = this.cartService.addToCart(this.searchResults[i])
        
        // addToCartElement.innerHTML =  "<input type='button'onClick={() => this.cartService.addToCart(this.searchResults[i]} value='Add to Cart'", "text/html";

        resultsList.append(addToCartElement);
        // onClickButton(event) {
        //   this.onClick.emit(event);
        // }
        // OnClick function in icecreamdataservice, pass in inventory object, add it to a shopping cart, cart is an array of inventory items
        
        // addToCartElement. =  "<input type='button'onClick={() => this.cartService.addToCart(this.searchResults[i]} value='Add to Cart'", "text/html";

        // addToCart(this.searchResults[i]) : void{
        // this.cartService.addToCart(product);
        // window.alert('Your product has been added to the cart!');
        // }
      }
    }
  }
}