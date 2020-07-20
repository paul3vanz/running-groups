import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'running-groups-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: [ './profile-summary.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
