import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    let searchButton = document.getElementById("search");
    searchButton.addEventListener("click", event=>{this.search()});
  }

  search(): void{
    console.log("At search()");
    //let searchForm = document
  }

}
