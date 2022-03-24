import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./public/components/landing-page/login/login.component";
import {RegisterComponent} from "./public/components/landing-page/register/register.component";
import {LandingPageComponent} from "./public/components/landing-page/landing-page.component";
import {PublicModule} from "./public/public.module";
import {RestrictedModule} from "./restricted/restricted.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicModule,
    RestrictedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
