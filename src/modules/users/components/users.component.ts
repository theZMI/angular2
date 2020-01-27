import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  template: `
    <div style="border: 1px solid red; border-radius: 5px; margin: 25px; padding: 25px;">
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
