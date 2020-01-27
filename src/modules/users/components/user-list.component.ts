import { Component, OnInit } from '@angular/core';

import { UserService } from '../services';

@Component({
  selector: 'user-list',
  template: `
    <div style="border: 1px solid red; border-radius: 5px; margin: 25px; padding: 25px;">
      <h3>List of users</h3>
      <ul *ngFor="let u of users">
        <li>{{ u | json }}</li>
      </ul>
    </div>
  `
})
export class UserListComponent implements OnInit {
  users;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getList().subscribe(
      data => {
        this.users = data;
      }
    );
  }
}
