import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services';

@Component({
  selector: 'users-list',
  template: `
    <div style="border: 1px solid red; border-radius: 5px; margin: 25px; padding: 25px;">
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
    this.usersService.getList().subscribe(
      data => {
        this.users = data;
      }
    );
  }
}
