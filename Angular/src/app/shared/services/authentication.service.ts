import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  currentUser: UserModel | undefined;


  loginUser(email:string, password:string): UserModel | null{
    console.log(email);
    console.log(password);
    this._http.post(
      'http://localhost:3000/api/users/login',
      {"user":{"email":"wrong@email.test","password":"password"}}).subscribe(response => {
        console.log(response)
    });
    return null;
  }


  registerUser(firstName:string, lastName:string, email:string, password:string): UserModel | null{

    return null;
  }


  isUserValid(): boolean{
    return false;
  }

  changeFirstName(newFirstName:string):boolean{
    return false;
  }

  updatePassword(currentPassword: string, newPassword: string){

  }


}
