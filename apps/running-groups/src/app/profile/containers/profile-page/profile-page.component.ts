import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@running-groups/auth';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './profile-page.component.html',
  styleUrls: [ './profile-page.component.css' ],
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<User>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getUser();
  }

  ngOnInit(): void {}
}
