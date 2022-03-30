import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./public/components/landing-page/landing-page.component";
import {MainComponent} from "./restricted/components/main/main.component";
import {Error404Component} from "./shared/httperrors/error400/error404.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full' },
  {path:'public',component:LandingPageComponent},
  {path:'main',component:MainComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
