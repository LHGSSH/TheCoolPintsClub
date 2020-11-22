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

  public searchCaller(searchObject: Object): Promise<Object> {
    return this.search('search', searchObject);
  }

  private search(urlPath: string, searchObject: Object):
    Promise<Object>{
      let apiBaseUrl = "http://localhost:3000";
      const url: string = `${apiBaseUrl}/${urlPath}`;
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