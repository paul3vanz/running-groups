import { Auth } from 'aws-amplify';
import { Injectable } from '@angular/core';
import { from, throwError, Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo: {
    id: string;
    email: string;
    emailVerified: boolean;
    phoneNumber: string;
    phoneNumberVerified: boolean;
  };

  signIn(username: string, password: string): Observable<void> {
    return from(Auth.signIn(username, password)).pipe(catchError((error) => throwError(error)));
  }

  signOut(): Observable<void> {
    return from(Auth.signOut()).pipe(catchError((error) => throwError(error)));
  }

  getUser(): Observable<User> {
    console.log('getUser');

    return from(Auth.currentUserInfo()).pipe(
      map((user) => {
        if (!user) {
          return null;
        }

        const attributes = user.attributes;

        const userInfo = {
          id: attributes.sub,
          email: attributes.email,
          emailVerified: attributes.email_verified,
          phoneNumber: attributes.phone_number,
          phoneNumberVerified: attributes.phone_number_verified,
        };

        this.userInfo = userInfo;

        console.log(this.userInfo);

        return userInfo;
      })
    );
  }

  constructor() {}
}
