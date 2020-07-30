import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from '@running-groups/auth';

@Component({
  selector: 'running-groups-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  @Input() sessionBookings: any;

  @Output() cancelSession = new EventEmitter<{
    sessionId: string;
    userId: string;
  }>();
  @Output() signOut = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  get sessionBookingRuns(): any {
    if (!this.sessionBookings || !this.sessionBookings.items) {
      return null;
    }

    return this.sessionBookings.items.map((sessionBooking) => {
      return sessionBooking.session;
    });
  }

  onCancelSession(sessionId: string): void {
    this.cancelSession.emit({ sessionId: sessionId, userId: this.user.id });
  }

  onUpdateProfile(): void {

  }
}
