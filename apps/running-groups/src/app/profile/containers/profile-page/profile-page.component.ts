import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@running-groups/auth';
import { Observable, from } from 'rxjs';
import { RunsService } from '@running-groups/api';

@Component({
  templateUrl: './profile-page.component.html',
  styleUrls: [ './profile-page.component.css' ],
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<User>;
  sessionBookings$: Observable<any>;

  constructor(private authService: AuthService, private runsService: RunsService) {}

  ngOnInit(): void {
    this.user$ = this.authService.userInfo$;

    console.log(this.authService.userInfo$.getValue(), this.authService.userInfo$.getValue().id);

    this.sessionBookings$ = from(
      this.runsService.listSessionBookings({
        userId: {
          eq: this.authService.userInfo$.getValue().id,
        },
      })
    );
  }
}
