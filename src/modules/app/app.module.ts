import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/not-found.component';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },
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
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
