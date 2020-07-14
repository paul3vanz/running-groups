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

  onBook(runId: string): void {
    this.apiService
      .CreateRun({
        leaderId: '',
        locationId: '',
        organisationId: '',
        title: 'test',
        paceFrom: '',
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
