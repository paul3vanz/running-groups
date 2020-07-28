import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import * as moment from 'moment-mini';

import { AuthService } from '@running-groups/auth';
import { RunsService, ListSessionsQuery } from '@running-groups/api';
import { ConfirmCancelSessionBookingDialogComponent } from '../../../core/components/confirm-cancel-session-booking-dialog/confirm-cancel-session-booking-dialog.component';
import { filter } from 'rxjs/operators';
import { FilterOptionsDialogComponent } from '../../../core/components/filter-options-dialog/filter-options-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './calendar-page.component.html',
  styleUrls: [ './calendar-page.component.scss' ],
})
export class CalendarPageComponent {
  isLoading = false;
  hasFilters = false;
  organisations: any[];

  loading$: Observable<boolean>;
  sessions$: Observable<ListSessionsQuery>;

  selectedDate = moment().startOf('day').format('YYYY-MM-DD');

  constructor(private authService: AuthService, public dialog: MatDialog, private runsService: RunsService, private snackBar: MatSnackBar) {
    this.loading$ = this.runsService.getLoading$();
    this.sessions$ = this.runsService.listSessions$();

    this.sessions$.subscribe(console.log);
  }

  onBookSession(sessionId: string) {
    this.runsService.createSessionBooking(sessionId, this.authService.userInfo$.getValue().id).subscribe((sessionBooking) => {
      this.snackBar.open('Session booked', 'Dismiss');
      //   const index = this.runs.findIndex((run) => run.id === sessionBooking.sessionId);
      //   this.runs[index] = sessionBooking.session;
    });
  }

  onCancelSession(sessionId: string) {
    const dialogRef = this.dialog.open(ConfirmCancelSessionBookingDialogComponent);

    dialogRef.afterClosed().pipe(filter(Boolean)).subscribe((result) => {
      this.runsService.deleteSessionBooking(sessionId, this.authService.userInfo$.getValue().id).subscribe((sessionBooking) => {
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
