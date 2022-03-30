import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import {AuthenticationService} from "../shared/services/authentication.service";

//https://www.geeksforgeeks.org/auth-guards-in-angular-9-10-11/

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.isUserValid();
    if (!isAuthenticated) {
      this.router.navigate(['/public']);
    }
    return isAuthenticated;
  }

}
