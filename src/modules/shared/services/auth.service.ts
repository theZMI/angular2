import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  get token(): string {
    return localStorage.getItem('_authToken');
  }

  set token(token: string) {
    localStorage.setItem('_authToken', token);
  }

  deleteToken(): void {
    localStorage.removeItem('_authToken');
  }

  isAuth(): boolean {
    return !!this.token;
  }

  isTokenExpired(): boolean {
    return false;
  }
}
