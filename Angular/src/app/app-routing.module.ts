import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./public/components/landing-page/landing-page.component";
import {MainComponent} from "./restricted/components/main/main.component";

const routes: Routes = [
  {path:'public',component:LandingPageComponent},
  {path:'main',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
