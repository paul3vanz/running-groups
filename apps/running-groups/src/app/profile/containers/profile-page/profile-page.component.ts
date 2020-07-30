import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@running-groups/auth';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { RunsService, APIService, ListSessionBookingsQuery } from '@running-groups/api';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmCancelSessionBookingDialogComponent } from '../../../core/components/confirm-cancel-session-booking-dialog/confirm-cancel-session-booking-dialog.component';
import { filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile-page.component.html',
  styleUrls: [ './profile-page.component.css' ],
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<User>;
  sessionBookings: ListSessionBookingsQuery;

  constructor(private authService: AuthService, public dialog: MatDialog, private router: Router, private runsService: RunsService) {
  }

  ngOnInit(): void {
    this.user$ = this.authService.user$;

    this.authService.user$.subscribe((user) => {
      this.runsService
      .listSessionBookings$({
        userId: {
          eq: user.id,
        },
      })
      .subscribe((sessionBookings) => {
        this.sessionBookings = sessionBookings;
      });
    });
  }

  onCancelSession(session: {
    sessionId: string;
    userId: string;
  }) {
    const dialogRef = this.dialog.open(ConfirmCancelSessionBookingDialogComponent);

    dialogRef.afterClosed().pipe(filter(Boolean)).subscribe(() => {
      this.runsService.deleteSessionBooking(session.sessionId, session.userId).subscribe((sessionBooking) => {
        this.sessionBookings = {
          ...this.sessionBookings,
          items: this.sessionBookings.items.filter((sessionBookingItem) => {
            return !(sessionBookingItem.sessionId === sessionBooking.sessionId && sessionBookingItem.userId === sessionBooking.userId);
          }),
        };
      });
    });
  }

  onSignOut() {
    this.authService.signOut$().pipe(take(1)).subscribe(() => {
      this.router.navigate([ '/auth' ]);
    });
  }
}
