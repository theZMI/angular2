import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  template: `
    <ul>
      <a routerLink="/users/list">List</a>
      <br>
      <a routerLink="/users/registration">Registration</a>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class UsersComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
