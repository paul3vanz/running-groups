import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from '@running-groups/auth';
import { take, map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      take(1),
      map((user) => {
        if (!user || !user.id) {
          this.router.navigate([ '/auth' ]);

          return false;
        }

        return true;
      })
    );
  }

  canActivateChild() {
    return this.canActivate();
  }

  constructor(private authService: AuthService, private router: Router) {}
}
