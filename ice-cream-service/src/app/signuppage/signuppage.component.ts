import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signupRedirect(): void {
    console.log("redirect!!!");
    this.router.navigate[('/')];
  }

}