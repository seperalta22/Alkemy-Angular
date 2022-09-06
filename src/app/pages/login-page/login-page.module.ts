import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class LoginPageModule {}
