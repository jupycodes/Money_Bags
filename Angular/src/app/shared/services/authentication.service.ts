import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  // currentUser: UserModel | undefined;
  currentUser: Object | undefined;

  loginUser(email:string, password:string): boolean | null{
    this._http.post(
      'http://localhost:3000/api/users/login',
      {user:{email:email,password:password}}).subscribe(response => {
        this.currentUser = response;
        console.log(this.currentUser)
      return true;
    });
    return false;
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
