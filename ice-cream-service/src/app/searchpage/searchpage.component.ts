import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IceCreamDataService } from '../ice-cream-data.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  public formError: string = '';
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
    console.log(response.result);
  }
}