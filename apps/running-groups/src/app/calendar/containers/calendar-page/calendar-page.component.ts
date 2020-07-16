import { Component, OnInit } from '@angular/core';
import { APIService, RunsService } from '@running-groups/api';

import * as moment from 'moment-mini';
import { Auth } from 'aws-amplify';
import { AuthService } from '@running-groups/auth';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './calendar-page.component.html',
  styleUrls: [ './calendar-page.component.scss' ],
})
export class CalendarPageComponent implements OnInit {
  organisations: any[];
  topographies: any[];
  locations: any[];
  runs: any[];

  isLoading$: Observable<boolean>;

  selectedDate = moment().startOf('day').format('YYYY-MM-DD');

  constructor(private apiService: APIService, private authService: AuthService, private runsService: RunsService) {}

  ngOnInit(): void {
    this.isLoading$ = this.authService.isLoading$;

    this.onLoadSessions();

    this.apiService.OnCreateSessionListener.subscribe(console.log);
    this.apiService.OnUpdateSessionListener.subscribe(console.log);
    this.apiService.OnDeleteSessionListener.subscribe(console.log);
  }

  onLoadTopographies() {
    this.apiService.ListTopographies().then(({ items }) => {
      this.topographies = items;
    });
  }
  onLoadLocations() {
    this.apiService.ListLocations().then(({ items }) => {
      this.locations = items;
    });
  }
  onLoadSessions() {
    this.runsService.listSessions().then(({ items }) => {
      this.runs = items;
    });
  }

  async onBookSession(sessionId: string): Promise<void> {
    this.runsService.bookSession(sessionId, this.authService.userInfo$.getValue().id);
  }

  shiftDate(amount: number) {
    this.selectedDate = moment(this.selectedDate).add(amount, 'd').format('YYYY-MM-DD');
  }

  onSelectDate(date: string) {
    this.selectedDate = date;
  }

  get dates(): string[] {
    const startOfWeek = moment(this.selectedDate).startOf('isoWeek');

    return Array.from(Array(7)).map((value, index) => startOfWeek.clone().add(index, 'd').format('YYYY-MM-DD'));
  }
}
