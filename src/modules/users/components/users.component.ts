import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  template: `
    <div class="--component">
      <h3>UsersModule wrapper</h3>
      <router-outlet></router-outlet>
    </div>
  `
})
export class UsersComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
