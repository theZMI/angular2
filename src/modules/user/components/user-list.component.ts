import { Component, OnInit } from '@angular/core';

import { UserService } from '../services';

@Component({
  selector: 'user-list',
  template: `
    <div style="background: #EEE; border-radius: 5px; padding: 30px;">
      <p>List of users</p>
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
