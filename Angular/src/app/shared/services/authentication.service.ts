import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) {
  }

  currentUser: UserModel | undefined;

  loginUser(email: string, password: string): boolean | null {
    this._http.post<UserModel>(
      'http://localhost:3000/api/users/login',
      {user: {email: email, password: password}}).subscribe({
      next: response => {
        this.currentUser = new UserModel(
          response.id,
          response.firstName,
          response.lastName,
          response.email,
          response.token
        )
        console.log(this.currentUser)
        console.log(this.currentUser.email)
        return true;
      },
      error: error => {

      }
    });
    return false;
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
