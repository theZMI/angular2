import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialAppModule } from '../ngmaterial/ngmaterial.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services';
import { UsersComponent, UserLoginComponent, UserRegistrationComponent, UserListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: 'list', component: UserListComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'registration', component: UserRegistrationComponent }
    ]
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserLoginComponent,
    UserListComponent,
    UserRegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialAppModule,
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
  ]
})
export class UsersModule {
}
