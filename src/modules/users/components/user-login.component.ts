import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { UsersService } from '../services';
import { AuthService, BaseComponent } from '../../shared';

@Component({
  selector: 'user-login',
  template: `
    <form [formGroup]='form' novalidate (ngSubmit)='submit()'
          class="--component">
      <h3>Login:</h3>
      <div *ngIf="isSuccess">Юзер вошёл</div>
      <div *ngIf="errorMsg">{{ errorMsg }}</div>
      <mat-form-field class="width-100">
        <input type="text" formControlName="email" matInput placeholder="Email">
        <mat-error *ngIf="form.controls['email'].invalid && form.controls['email'].touched">Некорректный email</mat-error>
      </mat-form-field>
      <mat-form-field class="width-100">
        <input type="password" formControlName="pwd" matInput placeholder="Password">
        <mat-error *ngIf="form.controls['pwd'].invalid && form.controls['pwd'].touched">Не менее 3-х символов</mat-error>
      </mat-form-field>
      <div>
        <button type="submit" mat-flat-button color="primary" [disabled]='form.invalid'>Отправить</button>
      </div>
    </form>
  `
})
export class UserLoginComponent extends BaseComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isSuccess = false;
  errorMsg = '';

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    public authService: AuthService
    ) {
    super();
  }

  ngOnInit() {
    this.authService.isAuth$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
      isAuth => {
        if (isAuth) {
          this.router.navigate(['/users/dashboard']);
        }
      }
    );

    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  submit() {
    if (this.form.valid) {
      this.isSuccess = false;
      this.errorMsg = null;

      this.usersService
        .login(this.form.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(
        isSuccess => this.isSuccess = isSuccess,
        error => this.errorMsg = error
        );
    }
  }
}
