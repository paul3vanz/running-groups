import { Auth } from 'aws-amplify';
import { Injectable } from '@angular/core';
import {
  from,
  throwError,
  Observable,
  EMPTY,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loading$ = new BehaviorSubject<boolean>(false);
  private _user$ = new BehaviorSubject<User>(null);

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }

  getUser$(): Observable<User> {
    this._loading$.next(true);

    return from(Auth.currentUserInfo()).pipe(
      map((user) => {
        this._loading$.next(false);

        if (!user) {
          return null;
        }

        const attributes = user.attributes;

        this._user$.next({
          id: attributes.sub,
          email: attributes.email,
          emailVerified: attributes.email_verified,
          phoneNumber: attributes.phone_number,
          phoneNumberVerified: attributes.phone_number_verified,
        });

        return this._user$.getValue();
      })
    );
  }

  signIn$(username: string, password: string): Observable<void> {
    this._loading$.next(true);

    return from(Auth.signIn(username, password)).pipe(
      catchError((error) => throwError(error)),
      finalize(() => this._loading$.next(false))
    );
  }

  signOut$(): Observable<void> {
    this._loading$.next(true);

    return from(Auth.signOut()).pipe(
      catchError((error) => throwError(error)),
      finalize(() => this._loading$.next(false))
    );
  }
}
