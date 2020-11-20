import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IceCreamDataService } from '../ice-cream-data.service';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {

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

  constructor(private http: HttpClient, private router: Router, public iceCreamDataService: IceCreamDataService) { }

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
      }
    }
  }

}
