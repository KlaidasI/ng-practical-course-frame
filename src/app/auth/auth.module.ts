import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './containers/auth/auth.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AuthComponent],
})
export class AuthModule { }
