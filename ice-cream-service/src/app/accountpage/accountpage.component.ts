import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, public authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    const logoutButton = document.getElementById("logout");

    logoutButton.addEventListener('click', event => {
      this.logout();
    });
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}