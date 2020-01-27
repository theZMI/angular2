import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor, AuthInterceptor } from './interceptors';
import { AuthService } from './services';
import { MainMenuComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  declarations: [
    MainMenuComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class SharedModule {
}
