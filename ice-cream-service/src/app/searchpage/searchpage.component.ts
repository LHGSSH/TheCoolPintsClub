import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  public searchQuery: string = "";
  constructor(private http: HttpClient, private router: Router, public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  search(): void{
    console.log("At search()");
    //this.searchQuery = document.getFormById(searchForm).getText()

    this.authenticationService.search(this.searchQuery);
    
  }

  

}
