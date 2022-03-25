import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from '../models/userModel';
import {Observable} from "rxjs";
import {IUserModel} from "../models/IUserModel";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) {
  }

  currentUser: UserModel | undefined;

  loginUser(email: string, password: string): UserModel | null{
    this._http.post<IUserModel>(
      'http://localhost:3000/api/users/login',
      {user: {email: email, password: password}}).subscribe({
      next: response => {
        this.currentUser = response as UserModel;
        console.log(this.currentUser)
        return this.currentUser;
      },
      error: error => {
        return null;
      }
    });
    return null;
  }


  registerUser(firstName: string, lastName: string, email: string, password: string): UserModel | null {

    return null;
  }


  isUserValid(): boolean {
    return false;
  }

  changeFirstName(newFirstName: string): boolean {
    return false;
  }

  updatePassword(currentPassword: string, newPassword: string) {

  }


}
