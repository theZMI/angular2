import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../services';
import { AuthService } from '../../shared';

@Component({
  selector: 'user-logout',
  template: `
    <form [formGroup]='form' novalidate (ngSubmit)='submit()' style="border: 1px solid red; border-radius: 5px; margin: 25px; padding: 25px;">
      <h3>Logout:</h3>
      <div *ngIf="isSuccess">Юзер вышёл</div>
      <div>
        <button type="submit" mat-flat-button color="primary" [disabled]='form.invalid'>Logout</button>
      </div>
    </form>
  `
})
export class UserLogoutComponent implements OnInit {
  form: FormGroup;
  isSuccess = false;

  constructor(private formBuilder: FormBuilder, public usersService: UsersService, public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/users/login']);
    }

    this.form = this.formBuilder.group({
    });
  }

  submit() {
    if (this.form.valid) {
      this.isSuccess = false;
      this.usersService.logout();
      this.isSuccess = true;
    }
  }
}
