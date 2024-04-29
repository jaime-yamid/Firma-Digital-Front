import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HomeUserModule } from './modules/home-user/home-user.module';
import { ComponentsModule } from './modules/components/components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ComponentsModule,
    HomeUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
