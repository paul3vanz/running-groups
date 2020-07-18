import { Auth } from 'aws-amplify';
import { Injectable } from '@angular/core';
import { from, throwError, Observable, EMPTY, Subject, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoading$ = new BehaviorSubject<boolean>(false);
  userInfo$ = new BehaviorSubject<User>(null);

  signIn(username: string, password: string): Observable<void> {
    return from(Auth.signIn(username, password)).pipe(catchError((error) => throwError(error)));
  }

  signOut(): Observable<void> {
    return from(Auth.signOut()).pipe(catchError((error) => throwError(error)));
  }

  getUser(): Observable<User> {
    this.isLoading$.next(true);

    return from(Auth.currentUserInfo()).pipe(
      map((user) => {
        this.isLoading$.next(false);

        if (!user) {
          return null;
        }

        const attributes = user.attributes;

        this.userInfo$.next({
          id: attributes.sub,
          email: attributes.email,
          emailVerified: attributes.email_verified,
          phoneNumber: attributes.phone_number,
          phoneNumberVerified: attributes.phone_number_verified,
        });

        return this.userInfo$.getValue();
      })
    );
  }
}
