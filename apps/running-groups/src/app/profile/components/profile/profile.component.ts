import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@running-groups/auth';

@Component({
  selector: 'running-groups-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  @Input() sessionBookings: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.sessionBookings);
  }
}
