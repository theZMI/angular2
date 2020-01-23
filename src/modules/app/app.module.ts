import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
