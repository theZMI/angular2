import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

import { UsersService } from '../services';
import { AuthService, User, BaseComponent } from '../../shared';

@Component({
  selector: 'user-dashboard',
  template: `
    <div class="--component">
      <h3>Profile</h3>
      <form [formGroup]='form' novalidate (ngSubmit)='submit()' *ngIf="user">
        <div *ngIf="isSuccess">Сохранено</div>
        <div *ngIf="errorMsg">{{ errorMsg }}</div>
        <mat-form-field class="width-100">
          <input type="text" formControlName="password" matInput placeholder="Password" value="{{ user.pwd }}">
          <mat-error *ngIf="form.controls['password'].invalid && form.controls['password'].touched">Некорректный пароль</mat-error>
        </mat-form-field>
        <div>
          <button type="submit" mat-flat-button color="primary" [disabled]='form.invalid'>Отправить</button>
        </div>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent extends BaseComponent implements OnInit {
  token: string = null;
  user: User = null;
  form: FormGroup = null;
  isSuccess = false;
  errorMsg = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
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

    this.form = this.formBuilder.group({
      password: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  submit() {
    if (this.form.valid) {
      this.isSuccess = false;
      this.errorMsg = null;

      this.usersService
        .updateCurrentUser(this.form.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(
          user => this.isSuccess = !!user,
          error => this.errorMsg = error
        );
    }
  }
}
