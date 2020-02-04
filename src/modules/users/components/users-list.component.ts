import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services';
import { BaseComponent } from '../../shared/components';
import {takeUntil} from 'rxjs/operators';

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
export class UsersListComponent extends BaseComponent implements OnInit {
  users;

  constructor(private usersService: UsersService) {
    super();
  }

  ngOnInit() {
    this.usersService.list()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
      data => {
        this.users = data;
      }
    );
  }
}
