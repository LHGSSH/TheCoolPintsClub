import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('login') loginButton: ElementRef;
  @ViewChild('signup') signupButton: ElementRef;
  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
