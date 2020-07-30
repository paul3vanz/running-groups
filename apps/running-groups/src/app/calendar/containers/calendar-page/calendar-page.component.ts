import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import * as moment from 'moment-mini';

import { AuthService, User } from '@running-groups/auth';
import { RunsService, ListSessionsQuery } from '@running-groups/api';
import { ConfirmCancelSessionBookingDialogComponent } from '../../../core/components/confirm-cancel-session-booking-dialog/confirm-cancel-session-booking-dialog.component';
import { FilterOptionsDialogComponent } from '../../../core/components/filter-options-dialog/filter-options-dialog.component';

@Component({
  templateUrl: './calendar-page.component.html',
  styleUrls: [ './calendar-page.component.scss' ],
})
export class CalendarPageComponent {
  hasFilters = false;
  selectedDate = moment().startOf('day').format('YYYY-MM-DD');
  user: User;

  user$: Observable<User>;
  loading$: Observable<boolean>;
  sessions$: Observable<ListSessionsQuery>;


  constructor(private authService: AuthService, public dialog: MatDialog, private runsService: RunsService, private snackBar: MatSnackBar) {
    this.loading$ = this.runsService.getLoading$();
    this.sessions$ = this.runsService.listSessions$();
    this.user$ = this.authService.user$;

    this.user$.subscribe((user) => this.user = user);
  }

  onBookSession(sessionId: string) {
    this.runsService.createSessionBooking(sessionId, this.user.id).subscribe((sessionBooking) => {
      this.snackBar.open('Session booked', 'Dismiss');
      //   const index = this.runs.findIndex((run) => run.id === sessionBooking.sessionId);
      //   this.runs[index] = sessionBooking.session;
    });
  }

  onCancelSession(sessionId: string) {
    const dialogRef = this.dialog.open(ConfirmCancelSessionBookingDialogComponent);

    dialogRef.afterClosed().pipe(filter(Boolean)).subscribe(() => {
      this.runsService.deleteSessionBooking(sessionId, this.user.id).subscribe((sessionBooking) => {
        this.snackBar.open('Session cancelled', 'Dismiss');
        // const index = this.runs.findIndex((run) => run.id === sessionBooking.sessionId);
        // this.runs[index] = sessionBooking.session;
      });
    });
  }

    shiftDate(amount: number) {
      this.selectedDate = moment(this.selectedDate).add(amount, 'd').format('YYYY-MM-DD');

      // this.onLoadSessions();
    }

    onSelectDate(date: string) {
      this.selectedDate = date;

      // this.onLoadSessions();
    }

    get dates(): string[] {
      const startOfWeek = moment(this.selectedDate).startOf('isoWeek');

      return Array.from(Array(7)).map((value, index) => startOfWeek.clone().add(index, 'd').format('YYYY-MM-DD'));
    }

  onFilterClick() {
    const dialogRef = this.dialog.open(FilterOptionsDialogComponent);
  }
}
