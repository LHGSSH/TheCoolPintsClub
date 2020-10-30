import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  public searchQuery: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  search(): void{
    console.log("At search()");

    
  }

  

}
