import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor, AuthInterceptor } from './interceptors';
import { MainMenuComponent } from './components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  declarations: [
    MainMenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class SharedModule {
}
