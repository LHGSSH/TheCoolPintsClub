import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class IceCreamDataService {

  constructor(private http: HttpClient) {
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
  private makeAuthApiCall(urlPath: string, user: User):
    Promise<AuthResponse> {
    let apiBaseUrl = "http://localhost:3000";
    const url: string = `${apiBaseUrl}/${urlPath}`;
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
  public editUser(user: User): Promise<AuthResponse> {
    let apiBaseUrl = "http://localhost:3000";
    const url: string = `${apiBaseUrl}/editUser`;
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

  public searchCaller(searchQuery: string): Promise<AuthResponse> {
    return this.search('search', searchQuery);
  }

  private search(urlPath: string, searchQuery: string):
    Promise<AuthResponse>{
      let apiBaseUrl = "http://localhost:3000";
      const url: string = `${apiBaseUrl}/${urlPath}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      }; 
      return this.http
        .post(url, searchQuery, httpOptions)
        .toPromise()
        .then(response => response as AuthResponse)
        .catch(this.handleError);
    }
  

}