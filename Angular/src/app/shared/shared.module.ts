import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTPErrorsComponent} from "./httperrors/httperrors.component";
import {Error404Component} from "./httperrors/error400/error404.component";
import {Error500Component} from "./httperrors/error500/error500.component";



@NgModule({
  declarations: [
    HTTPErrorsComponent,
    Error404Component,
    Error500Component
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
