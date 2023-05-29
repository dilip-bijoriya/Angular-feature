import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }