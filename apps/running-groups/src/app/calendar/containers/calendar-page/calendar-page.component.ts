import { Component, OnInit } from '@angular/core';
import { APIService, RunsService } from '@running-groups/api';

import * as moment from 'moment-mini';

@Component({
  templateUrl: './calendar-page.component.html',
  styleUrls: [ './calendar-page.component.scss' ],
})
export class CalendarPageComponent implements OnInit {
  organisations: any[];
  topographies: any[];
  locations: any[];
  runs: any[];

  selectedDate = moment().startOf('day').format('YYYY-MM-DD');

  constructor(private apiService: APIService, private runsService: RunsService) {}

  ngOnInit(): void {
    this.onLoadSessions();
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

  onBookSession(sessionId: string): void {
    this.apiService
      .CreateSession({
        runId: '3ade40b2-fb10-4433-ad62-192138efc138',
        date: '2020-07-14',
        time: '08:15:00',
      })
      .then(console.log);
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
