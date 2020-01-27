import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../services';
import { AuthService } from '../../shared';

@Component({
  selector: 'user-logout',
  template: `
    <form [formGroup]='form' novalidate (ngSubmit)='submit()' class="--component">
      <h3>Logout:</h3>
      <div>
        <button type="submit" mat-flat-button color="primary" [disabled]='form.invalid'>Logout</button>
      </div>
    </form>
  `
})
export class UserLogoutComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public usersService: UsersService,
    public authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/users/login']);
    }

    this.form = this.formBuilder.group({});
  }

  submit() {
    if (this.form.valid) {
      this.usersService.logout();
      this.router.navigate(['users/login']);
    }
  }
}
