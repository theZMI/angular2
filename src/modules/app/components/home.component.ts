import { Component } from '@angular/core';

import { BaseComponent } from '../../shared';

@Component({
  selector: 'app-home',
  template: `
    <div class="--component">
      <h3>Home</h3>
      <p>This is home page</p>
    </div>`
})
export class HomeComponent extends BaseComponent {
  constructor() {
    super();
  }
}
