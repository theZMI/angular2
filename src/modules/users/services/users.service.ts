import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { map, take, flatMap, filter } from 'rxjs/operators';

import { IUser, IApiAnswer, AuthService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly ROOT_URL = 'http://www.t.local/api2/user/';
  currentUser$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  isCurrentUserLoading = false;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  list(): Observable<IUser[]> {
    return this.http.get<IApiAnswer>(this.ROOT_URL + 'get_users.php').pipe(
      map(data => data.data)
    );
  }

  add(user: IUser): Observable<boolean> {
    return this.http.post<IApiAnswer>(this.ROOT_URL + 'registration.php', user).pipe(
      map(data => data.is_success)
    );
  }

  login(user: IUser): Observable<boolean> {
    return this.http.post<IApiAnswer>(`${this.ROOT_URL}login.php`, user).pipe(
      map(data => {
        this.authService.token = data.data.authToken;
        return data.is_success;
      })
    );
  }

  logout(): void {
    this.authService.deleteToken();
  }

  // TODO: Переделать запрос на GET
  getIdByToken(token: string) {
    return this.http.post<IApiAnswer>(`${this.ROOT_URL}get_user_id_by_token.php`, {token}).pipe(
      map(data => {
        let ret: number = null;
        if (data.is_success) {
          ret = data.data;
        }
        return ret;
      })
    );
  }

  // TODO: Переделать запрос на GET
  getUserById(userId: number): Observable<IUser> {
    return this.http.post<IApiAnswer>(`${this.ROOT_URL}get_user_by_user_id.php`, {user_id: userId}).pipe(
      map(data => {
        let ret: IUser = null;
        if (data.is_success) {
          ret = data.data;
        }
        return ret;
      })
    );
  }

  private _getCurrentUser(): Observable<IUser> {
    return this.authService.token$.pipe(
      take(1),
      flatMap(token => {
        return this.getIdByToken(token);
      }),
      flatMap(userId => {
        return this.getUserById(userId);
      })
    );
  }

  getCurrentUser(reset: boolean = false): Observable<IUser> {
    if (reset || (!this.isCurrentUserLoading && !this.currentUser$.value)) {
      this.isCurrentUserLoading = true;
      this._getCurrentUser().subscribe(
        user => {
          this.currentUser$.next(user);
          this.isCurrentUserLoading = false;
        }
      );
    }
    return this.currentUser$.asObservable().pipe(filter(d => !!d));
  }

  updateCurrentUser(user: IUser): Observable<IUser> {
    return this.http.post<IApiAnswer>(`${this.ROOT_URL}update_user.php`, {user}).pipe(
      map(data => {
        let ret: IUser = null;
        if (data.is_success) {
          ret = data.data;
        }
        return ret;
      })
    );
  }
}
