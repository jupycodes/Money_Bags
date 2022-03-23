import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  currentUser: UserModel | undefined;

  registerUser(firstName:string, lastName:string, email:string, password:string): UserModel | null{

    return null;
  }

  loginUser(email:string, password:string): UserModel | null{

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
