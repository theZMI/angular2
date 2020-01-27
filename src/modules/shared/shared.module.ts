import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor, AuthInterceptor } from './interceptors';
import { AuthService } from './services';
import { MainMenuComponent } from './components';

@NgModule({
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  declarations: [
    MainMenuComponent
  ],
  exports: [
    MainMenuComponent
  ]
})
export class SharedModule {
}
