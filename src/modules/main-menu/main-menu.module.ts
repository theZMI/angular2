import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainMenuComponent } from './components';
import { UsersModule } from '../users/users.module';


@NgModule({
  providers: [
  ],
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class MainMenuModule {
}
