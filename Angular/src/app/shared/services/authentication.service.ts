import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from '../models/userModel';
import {IUserModel} from "../models/IUserModel";
import {Observable, Subscription, throwError} from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) {
  }

  currentUser: UserModel | undefined;

  /**
   * Call login route from backend api
   * return observer<user> if login was successful
   * return error if login failed (still an observer but not important)
   * @param email
   * @param password
   */
  public loginUser(email: string, password: string): Observable<UserModel>{
    return new Observable<UserModel>(subscriber => {
      this._http.post<IUserModel>(
        environment.BackEndURL,
        {user: {email: email, password: password}}
      ).subscribe({
        next: user => {
          this.currentUser = (user as UserModel);
          subscriber.next(this.currentUser);
        },
        error: error=>{
          subscriber.error(error)
        }
      })
    })
  }





// public async loginUser(email: string, password: string): Promise<Subscription>{
  //     return this._http.post<IUserModel>(
  //       'http://localhost:3000/api/users/login',
  //       {user: {email: email, password: password}}).subscribe({
  //       next: response => {
  //         this.currentUser = response as UserModel;
  //         console.log(this.currentUser)
  //         return this.currentUser;
  //       },
  //       error: error => {
  //         throw error;
  //       }
  //     });
  // }


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
