import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public formError: string = '';
  date: Date;
  loginpageID: number = 1;

  public credentials = {
    username: '',
    email: '',
    fullName: '',
    password: ''
  };

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLoginSubmit(): void {
    this.formError = '';
    if (
      !this.credentials.username ||
      !this.credentials.password
    ) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();
    }
  }

  doLogin(): void {
    let reqID = this.date.getTime() + this.loginpageID;
    console.log(reqID);
    this.authenticationService.login(this.credentials, reqID)
      .then(() => this.router.navigateByUrl('/'))
      .catch((message) => this.formError = message);
  }

}
