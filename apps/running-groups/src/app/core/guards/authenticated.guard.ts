import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from '@running-groups/auth';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      take(1),
      map((user) => {
        console.log('guard', user);

        return Boolean(user.id);
      })
    );
  }
  canActivateChild() {
    return this.canActivate();
  }
  constructor(private authService: AuthService) {}
}
