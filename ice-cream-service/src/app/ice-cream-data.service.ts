import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class IceCreamDataService {

  private apiBaseUrl = 'http://localhost:3000';
  private iceCreamBaseUrl = 'http://localhost:4200';
  private dataSeviceCart = [];

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
  public editUser(user: User): Promise<AuthResponse> {
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
  
  public setDataServiceCart(dataSeviceCart: Object[]){
    console.log("in setDataServiceCart");
    this.dataSeviceCart = dataSeviceCart;

    for(let i = 0; i < this.dataSeviceCart.length; i++){
      console.log(this.dataSeviceCart[i]);
    }
  }

  public addToDataServiceCart(cartData: Object){
    console.log("in addToDataServiceCart");
    this.dataSeviceCart.push(cartData);

    for(let i = 0; i < this.dataSeviceCart.length; i++){
      console.log(this.dataSeviceCart[i]);
    }
  }

  public checkout(urlPath: string, cartData: Object): Object{
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }; 
    return this.http
      .post(url, cartData, httpOptions);
  }

}