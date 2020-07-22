import { Component, OnInit } from '@angular/core';
import { RunsService } from '@running-groups/api';

import * as moment from 'moment-mini';
import { AuthService } from '@running-groups/auth';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './calendar-page.component.html',
  styleUrls: [ './calendar-page.component.scss' ],
})
export class CalendarPageComponent implements OnInit {
  organisations: any[];
  runs: any[];

  isLoading$: Observable<boolean>;

  selectedDate = moment().startOf('day').format('YYYY-MM-DD');

  constructor(private authService: AuthService, private runsService: RunsService) {}

  ngOnInit(): void {
    this.isLoading$ = this.authService.isLoading$;

    this.onLoadSessions();
  }

  onLoadSessions() {
    this.runsService.listSessions().then(({ items }) => {
      this.runs = items.sort((a, b) => (moment(a.date).isBefore(moment(b.date)) ? -1 : 1));
    });
  }

  async onBookSession(sessionId: string): Promise<void> {
    this.runsService.createSessionBooking(sessionId, this.authService.userInfo$.getValue().id).then((sessionBooking) => {
      const index = this.runs.findIndex((run) => run.id === sessionBooking.sessionId);

      this.runs[index] = sessionBooking.session;
    });
  }

  shiftDate(amount: number) {
    this.selectedDate = moment(this.selectedDate).add(amount, 'd').format('YYYY-MM-DD');

    this.onLoadSessions();
  }

  onSelectDate(date: string) {
    this.selectedDate = date;

    this.onLoadSessions();
  }

  get dates(): string[] {
    const startOfWeek = moment(this.selectedDate).startOf('isoWeek');

    return Array.from(Array(7)).map((value, index) => startOfWeek.clone().add(index, 'd').format('YYYY-MM-DD'));
  }

  onCancelSession(sessionId: string) {
    const confirmCancel = confirm(`Are you sure you want to cancel your place on this session?`);

    if (confirmCancel) {
      this.runsService.deleteSessionBooking(sessionId, this.authService.userInfo$.getValue().id).then((sessionBooking) => {
        const index = this.runs.findIndex((run) => run.id === sessionBooking.sessionId);

        this.runs[index] = sessionBooking.session;
      });
    }
  }
}
