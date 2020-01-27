import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {AuthService} from '../services';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {
  isUserAuth = false;

  constructor(private authService: AuthService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.authService.token$.subscribe(token => {
      this.isUserAuth = !!token;
      this.changeDetectorRef.detectChanges();
    });
  }
}
