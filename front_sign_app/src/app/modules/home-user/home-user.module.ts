import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SignDocumentComponent } from './pages/sign-document/sign-document.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    SignDocumentComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeUserModule { }
