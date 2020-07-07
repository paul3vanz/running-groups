import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'running-groups-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: [ './calendar-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
