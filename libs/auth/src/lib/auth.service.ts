import { Auth } from 'aws-amplify';
import { Injectable } from '@angular/core';
import { from, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signIn(username: string, password: string): Observable<void> {
    return from(Auth.signIn(username, password)).pipe(catchError((error) => throwError(error)));
  }

  signOut(): Observable<void> {
    return from(Auth.signOut()).pipe(catchError((error) => throwError(error)));
  }

  getUser(): Observable<User> {
    return from(Auth.currentUserInfo()).pipe(
      map(({ attributes }) => {
        return {
          id: attributes.sub,
          email: attributes.email,
          emailVerified: attributes.email_verified,
          phoneNumber: attributes.phone_number,
          phoneNumberVerified: attributes.phone_number_verified,
        };
      }),
      catchError((error) => throwError(error))
    );
  }

  constructor() {}
}
