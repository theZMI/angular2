import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { AuthService, BaseComponent, User } from '../../shared';
import { UsersService } from '../../users/services';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent extends BaseComponent implements OnInit {
  isUserAuth = false;
  currentUser: User = null;

  constructor(private authService: AuthService, private usersService: UsersService, private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.authService.token$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(token => {
        this.isUserAuth = !!token;
        this.changeDetectorRef.markForCheck();
      });

    this.usersService.getCurrentUser().pipe(takeUntil(this.destroyed$)).subscribe(
      user => {
        this.currentUser = new User(user);
        this.changeDetectorRef.markForCheck();
      }
    );
  }
}
