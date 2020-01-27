import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services';

@Component({
  selector: 'users-list',
  template: `
    <div class="--component">
      <h3>List of users</h3>
      <ul *ngFor="let u of users">
        <li>{{ u | json }}</li>
      </ul>
    </div>
  `
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.list().subscribe(
      data => {
        this.users = data;
      }
    );
  }
}
