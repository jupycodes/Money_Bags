import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./public/components/landing-page/landing-page.component";
import {MainComponent} from "./restricted/components/main/main.component";
import {Error404Component} from "./shared/httperrors/error400/error404.component";

const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full' },
  {path:'public',component:LandingPageComponent},
  {path:'main',component:MainComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
