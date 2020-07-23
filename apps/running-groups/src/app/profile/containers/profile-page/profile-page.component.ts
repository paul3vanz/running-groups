import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@running-groups/auth';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { RunsService, APIService, ListSessionBookingsQuery } from '@running-groups/api';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmCancelSessionBookingDialogComponent } from '../../../core/components/confirm-cancel-session-booking-dialog/confirm-cancel-session-booking-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './profile-page.component.html',
  styleUrls: [ './profile-page.component.css' ],
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<User>;
  sessionBookings: ListSessionBookingsQuery;

  constructor(
    private apiService: APIService,
    private authService: AuthService,
    public dialog: MatDialog,
    private runsService: RunsService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.userInfo$;

    console.log(this.authService.userInfo$.getValue(), this.authService.userInfo$.getValue().id);

    this.runsService
      .listSessionBookings({
        userId: {
          eq: this.authService.userInfo$.getValue().id,
        },
      })
      .then((sessionBookings) => {
        this.sessionBookings = sessionBookings;
      });
  }

  onCancelSession(sessionId: string) {
    const dialogRef = this.dialog.open(ConfirmCancelSessionBookingDialogComponent);

    dialogRef.afterClosed().pipe(filter(Boolean)).subscribe((result) => {
      this.runsService.deleteSessionBooking(sessionId, this.authService.userInfo$.getValue().id).then((sessionBooking) => {
        this.sessionBookings = {
          ...this.sessionBookings,
          items: this.sessionBookings.items.filter((sessionBookingItem) => {
            console.log(sessionBookingItem.sessionId, sessionBooking.sessionId, sessionBookingItem.userId, sessionBooking.userId);

            return !(sessionBookingItem.sessionId === sessionBooking.sessionId && sessionBookingItem.userId === sessionBooking.userId);
          }),
        };
      });
    });
  }
}
