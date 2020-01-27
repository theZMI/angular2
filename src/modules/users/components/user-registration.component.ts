import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../services';

@Component({
  selector: 'user-registration',
  template: `
    <form [formGroup]='form' novalidate (ngSubmit)='submit()' style="background: #EEE; border-radius: 5px; padding: 30px;">
      <h2>Registraion</h2>
      <div *ngIf="isSuccess">Юзер добавлен</div>
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
export class UserRegistrationComponent implements OnInit {
  form: FormGroup;
  isSuccess = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
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
      this.userService.add(this.form.value).subscribe(
        isSuccess => {
          this.isSuccess = isSuccess;
        }
      );
    }
  }
}
