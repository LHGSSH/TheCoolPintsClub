import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { IceCreamDataService } from './ice-cream-data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private iceCreamDataService: IceCreamDataService) { }
  public getToken(): string {
    return this.storage.getItem('ice-cream-token');
  }
  public saveToken(token: string): void {
    this.storage.setItem('ice-cream-token', token);
  }
  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, fullName } = JSON.parse(atob(token.split('.')[1]));
      return { email, fullName } as User;
    }
  }
  public login(user: User): Promise<any> {
    return this.iceCreamDataService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }
  public logout(): void {
    this.storage.removeItem('ice-cream-token');
  }
  public register(user: User): Promise<any> {
    return this.iceCreamDataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
}