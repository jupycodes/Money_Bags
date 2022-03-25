import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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

  login(){
    if(this._authenticationService.loginUser(this.loginform.get('email')?.value,this.loginform.get('password')?.value)){
      this._router.navigate(['/main']);
    }else{
      // TODO:
    }
  }
}
