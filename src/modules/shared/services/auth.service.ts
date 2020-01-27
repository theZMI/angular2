import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string>;

  constructor() {
    this.tokenSubject = new BehaviorSubject(this.getTokenFromStorage());
  }

  get token$(): Observable<string> {
    return this.tokenSubject.asObservable();
  }

  get token(): string {
    return this.tokenSubject.getValue();
  }

  set token(token: string) {
    this.saveTokenToStorage(token);
    this.tokenSubject.next(token);
  }

  deleteToken(): void {
    this.deleteTokenFromStorage();
    this.tokenSubject.next(null);
  }

  isTokenExpired(): boolean {
    return false; // TODO
  }

  get isAuth$(): Observable<boolean> {
    return this.tokenSubject.asObservable().pipe(map(token => !!token));
  }

  isAuth(): boolean {
    return !!this.token;
  }

  private getTokenFromStorage(): string {
    return localStorage.getItem('_authToken');
  }

  private saveTokenToStorage(token: string): void {
    localStorage.setItem('_authToken', token);
  }

  private deleteTokenFromStorage(): void {
    localStorage.removeItem('_authToken');
  }
}
