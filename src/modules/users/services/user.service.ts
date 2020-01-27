import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser, IApiAnswer, AuthService } from '../../shared';

@Injectable()
export class UserService {
  readonly ROOT_URL = 'http://www.t.local/api2/user/';

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getList(): Observable<IUser[]> {
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
    return this.http.post<IApiAnswer>(this.ROOT_URL + 'login.php', user).pipe(
      map(data => {
        this.authService.token = data.data.authToken;
        return data.is_success;
      })
    );
  }
}
