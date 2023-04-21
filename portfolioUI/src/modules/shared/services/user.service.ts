import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userObject: SocialUser = {
    provider: '',
    id: '',
    email: '',
    name: '',
    photoUrl: '',
    firstName: '',
    lastName: '',
    authToken: '',
    idToken: '',
    authorizationCode: '',
    response: undefined
  };
  constructor() { }

  set setuser(userObject: SocialUser) {
  this._userObject = {...userObject}
  }

  get user(): SocialUser {
    return this._userObject
  }
}
