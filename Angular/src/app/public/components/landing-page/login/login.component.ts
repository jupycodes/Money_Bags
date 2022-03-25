import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../../../shared/models/userModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform = this._fb.group({
    email:[''],
    password:['']
  });

  constructor(
    public _authenticationService: AuthenticationService,
    private _fb: FormBuilder,
    private _router: Router
  ){ }


  ngOnInit(): void {
  }

  login() {
    this._authenticationService.loginUser(
      this.loginform.get('email')?.value, this.loginform.get('password')?.value)
      .subscribe({
        next: user => {
          console.log(`data: ${user}`);
          this._router.navigate(['/main']);
        },
        error: error => {
          throw error
        }
      });
  }
}
