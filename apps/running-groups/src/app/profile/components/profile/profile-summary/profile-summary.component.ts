import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'running-groups-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: [ './profile-summary.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSummaryComponent {
  @Output() updateProfile = new EventEmitter();
}
