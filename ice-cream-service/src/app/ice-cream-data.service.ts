import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class IceCreamDataService {

  constructor(private http: HttpClient, private apiBaseUrl: String) { 
    apiBaseUrl = "http://localhost:3000";
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
  private makeAuthApiCall(urlPath: string, user: User):
    Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
  private handleError(): AuthResponse {
    return new AuthResponse();
  }
}