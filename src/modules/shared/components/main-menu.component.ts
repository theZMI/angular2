import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }
}
