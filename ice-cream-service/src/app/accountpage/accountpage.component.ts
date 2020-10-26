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

  public formError: string = '';
  
  public credentials = {
    username: '',
    email: '',
    password: '',
    fullName: '',
    address: ''
  };
  
  constructor(private http: HttpClient, private router: Router, public authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    const logoutButton = document.getElementById("logout");

    logoutButton.addEventListener('click', event => {
      this.logout();
    });
  }

  onEditSubmit(): void {
    if (!this.credentials.username) {
      this.formError = 'You must enter your username';
    }
    else {
      this.doEdit();
    }
  }

  doEdit(): void {
    // Remove blank entries so they don't overwrite existing entries in the database
    for (let property in this.credentials) {
      if (this.credentials[property] === '') {
        delete this.credentials[property];
      }
    }

    this.authenticationService.editUser(this.credentials)
      .then(() => this.router.navigateByUrl('/'))
      .catch((message) => this.formError = message);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}