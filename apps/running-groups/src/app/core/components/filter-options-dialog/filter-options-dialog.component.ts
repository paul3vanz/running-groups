import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as moment from 'moment-mini';
import { RunFilters } from '@running-groups/api';

@Component({
  templateUrl: './filter-options-dialog.component.html',
  styleUrls: [ './filter-options-dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterOptionsDialogComponent implements OnInit {
  panelOpenState: boolean;
  paceFrom: string;
  paceTo: string;
  paceValues: string[];
  filters: RunFilters = {
    paceFrom: '07:45',
    paceTo: null,
    distanceFrom: 4,
    distanceTo: 8,
  };

  constructor() {
    this.paceValues = this.generatePaceValues();
  }

  ngOnInit(): void {}

  generatePaceValues(): string[] {
    const minutes = [];

    for (let minute = 7; minute <= 13; minute++) {
      [ 0, 15, 30, 45 ].forEach((seconds) =>
        minutes.push(
          moment({
            minute,
            seconds,
          }).format('HH:mm:ss')
        )
      );
    }

    return minutes;
  }

  validateFormValues() {
    console.log(this.filters);
    if (this.filters.distanceTo > this.filters.distanceFrom) {
      this.filters.distanceTo = this.filters.distanceFrom;
    }
  }

  paceToMoment(pace) {
    moment(pace, 'HH:mm:ss');
  }
}
