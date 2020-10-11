import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  public formError: string = '';

  public credentials = {
    username: '',
    email: '',
    password: '',
    fullName: '',
    address: ''
  };

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(): void {
    this.formError = '';
    if (
      !this.credentials.username ||
      !this.credentials.email ||
      !this.credentials.password ||
      !this.credentials.fullName ||
      !this.credentials.address
    ) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doRegister();
    }
  }

  doRegister(): void {
    this.authenticationService.register(this.credentials)
      .then(() => this.router.navigateByUrl('/'))
      .catch((message) => this.formError = message);
  }

}