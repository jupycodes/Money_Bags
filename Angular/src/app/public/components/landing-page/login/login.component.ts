import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../shared/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _authenticationService: AuthenticationService){ }

  email:string = '';
  password:string = '';

  ngOnInit(): void {
  }

  login(){
    // this._authenticationService.loginUser(email,password)
  }
}
