import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IceCreamDataService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public login(user: User, reqID: number): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user, reqID);
  }
  public register(user: User, reqID: number): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user, reqID);
  }
  private makeAuthApiCall(urlPath: string, user: User, reqID: number):
    Promise<AuthResponse> {
      console.log(reqID);
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http
      .post(url, user, httpOptions)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
  public editUser(user: User, reqID: number): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/editUser`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http
      .put(url, user, httpOptions)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
  private handleError(): AuthResponse {
    return new AuthResponse();
  }

  public checkoutCaller(order: Object, reqID: number): Promise<Object> {
    console.log(reqID);
    return this.checkout('checkout', order, reqID);
  }

  private checkout(urlPath: string, order: Object, reqID: number): Promise<Object> {
    console.log(reqID);
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http
      .post(url, order, httpOptions)
      .toPromise()
      .then(response => response as Object)
      .catch(this.handleError);
  }

  public searchCaller(searchObject: Object): Promise<Object> {
    return this.search('search', searchObject);
  }

  private search(urlPath: string, searchObject: Object):
    Promise<Object>{
      const url: string = `${this.apiBaseUrl}/${urlPath}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      }; 
      return this.http
        .post(url, searchObject, httpOptions)
        .toPromise()
        .then(response => response as Object)
        .catch(this.handleError);
    }
}