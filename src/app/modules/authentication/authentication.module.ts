import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecoveryPassComponent } from './pages/recovery-pass/recovery-pass.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    RecoveryPassComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
