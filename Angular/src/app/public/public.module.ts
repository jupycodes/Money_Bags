import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/landing-page/login/login.component';
import { RegisterComponent } from './components/landing-page/register/register.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
