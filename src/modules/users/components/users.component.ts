import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components';

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
export class UsersComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
