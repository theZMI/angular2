import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../services';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'user-dashboard',
  template: `
    <div class="--component">
      <h3>Dashboard</h3>
      <p>Token: {{ token }}</p>
    </div>
  `
})
export class UserDashboardComponent implements OnInit {
  token: string;

  constructor(private authService: AuthService, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.authService.token$.subscribe(
      token => this.token = token
    );
  }
}
