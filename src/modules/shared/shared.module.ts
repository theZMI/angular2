import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor, AuthInterceptor } from './interceptors';
import { AuthService } from './services';

@NgModule({
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class SharedModule {
}
