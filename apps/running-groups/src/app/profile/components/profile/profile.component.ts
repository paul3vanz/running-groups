import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() cancelSession = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.sessionBookings);
  }

  get sessionBookingRuns(): any {
    if (!this.sessionBookings || !this.sessionBookings.items) {
      return null;
    }

    return this.sessionBookings.items.map((sessionBooking) => {
      console.log(sessionBooking.session);
      return sessionBooking.session;
    });
  }

  onCancelSession(sessionId: string): void {
    this.cancelSession.emit(sessionId);
  }
}
