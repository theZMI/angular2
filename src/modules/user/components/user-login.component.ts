import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services';
import { AuthService } from '../../shared';

@Component({
  selector: 'user-login',
  template: `
    <form [formGroup]='form' novalidate (ngSubmit)='submit()' style="background: #EEE; border-radius: 5px; padding: 30px;">
      <h2>Login:</h2>
      <div>X-TOKEN: {{ authService.token }}</div>
      <div *ngIf="isAuthSuccess">Юзер вошёл</div>
      <div *ngIf="apiErrorMsg">{{ apiErrorMsg }}</div>
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
export class UserLoginComponent implements OnInit {
  form: FormGroup;
  isAuthSuccess = false;
  apiErrorMsg = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (this.authService.isAuth()) {
      this.router.navigate(['/user_dashboard']);
    }

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

  submit() {
    if (this.form.valid) {
      this.isAuthSuccess = false;
      this.apiErrorMsg = null;

      this.userService.login(this.form.value).subscribe(
        isSuccess => this.isAuthSuccess = isSuccess,
        error => this.apiErrorMsg = error
      );
    }
  }
}
