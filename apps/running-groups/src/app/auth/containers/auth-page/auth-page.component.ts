import { Component, OnInit } from '@angular/core';
import { AuthService } from '@running-groups/auth';
import { take, catchError, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {

  signUpFormFields = [
    {
      type: 'email',
      label: 'Email address',
      required: true,
    },
    {
      type: 'password',
      label: 'Password',
      required: true,
    },
  ];

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$
      .pipe(
        take(1),
        map((user) => {
          console.log('logged in', user);
          if (user) {
            this.router.navigate(['/profile']);
          }

          return EMPTY;
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(console.log);
  }
}
