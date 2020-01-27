import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit {
  isUserAuth = false;

  constructor(private authService: AuthService) {
    this.isUserAuth = authService.isAuth();
  }

  ngOnInit() {
  }
}
