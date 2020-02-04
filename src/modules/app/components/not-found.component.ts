import { Component } from '@angular/core';

import { BaseComponent } from '../../shared';

@Component({
  selector: 'app-not-found-app',
  template: `
  <div class="--component">
    <h3>404</h3>
    <p>Page not found</p>
  </div>`
})
export class NotFoundComponent extends BaseComponent {
  constructor() {
    super();
  }
}
