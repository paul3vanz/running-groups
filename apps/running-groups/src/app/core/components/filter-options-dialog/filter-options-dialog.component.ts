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
    paceFrom: null,
    paceTo: null,
    distanceFrom: 4,
    distanceTo: null,
  };

  constructor() {
    this.paceValues = this.generatePaceValues();
  }

  ngOnInit(): void {}

  generatePaceValues(): string[] {
    const minutes = [];

    for (let minute = 7; minute <= 13; minute++) {
      minutes.push(moment({ minute }).format('m:ss'));
      minutes.push(
        moment({
          minute,
          seconds: 15,
        }).format('m:ss')
      );
    }

    return minutes;
  }
}
