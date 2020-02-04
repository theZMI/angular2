import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { UsersService } from '../services';
import { AuthService, User, BaseComponent } from '../../shared';

@Component({
  selector: 'user-dashboard',
  template: `
    <div class="--component">
      <h3>Dashboard</h3>
      <p>Token: {{ token }}</p>
      <p>Fullname: {{ user?.full_name }}</p>
      <p>Email: {{ user?.email }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDashboardComponent extends BaseComponent implements OnInit {
  token: string = null;
  user: User = null;

  constructor(private authService: AuthService, private usersService: UsersService, private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.authService.token$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
      token => {
        this.token = token;
        this.usersService
          .getCurrentUser()
          .pipe(takeUntil(this.destroyed$))
          .subscribe(
          user => {
            this.user = new User(user);
            this.cdr.markForCheck();
          }
        );
      }
    );
  }
}
