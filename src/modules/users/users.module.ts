import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialAppModule } from '../ngmaterial/ngmaterial.module';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './services';
import { UsersComponent, UserLoginComponent, UserRegistrationComponent, UsersListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: 'list', component: UsersListComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'registration', component: UserRegistrationComponent }
    ]
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialAppModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [
  ]
})
export class UsersModule {
}
