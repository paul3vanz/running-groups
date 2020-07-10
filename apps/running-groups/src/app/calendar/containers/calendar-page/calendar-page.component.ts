import { Component, OnInit } from '@angular/core';
import { APIService } from '@running-groups/api';

@Component({
  templateUrl: './calendar-page.component.html',
  styleUrls: [ './calendar-page.component.scss' ],
})
export class CalendarPageComponent implements OnInit {
  organisations: any[];
  topographies: any[];
  locations: any[];
  runs: any[];

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.onLoadRuns();
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
  onLoadRuns() {
    this.apiService.ListRuns().then(({ items }) => {
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
}
