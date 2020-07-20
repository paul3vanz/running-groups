import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { GetSessionQuery } from '@running-groups/api';
import { AuthService } from '@running-groups/auth';

@Component({
  selector: 'running-groups-run-card',
  templateUrl: './run-card.component.html',
  styleUrls: [ './run-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunCardComponent implements OnInit {
  @Input() session: GetSessionQuery;
  @Output() bookSession = new EventEmitter<string>();
  @Output() cancelSession = new EventEmitter<string>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onBookSession(sessionId: string) {
    this.bookSession.emit(sessionId);
  }

  onCancelSession(sessionId: string) {
    this.cancelSession.emit(sessionId);
  }

  get hasDistanceOrTopography() {
    return this.session.run.distance || this.session.run.topography?.title;
  }

  get remainingSpaces() {
    return this.session.run.capacity - this.session.bookings?.length;
  }

  get isBooked() {
      return this.session.bookings.some((booking) => booking.userId === this.authService.userInfo$.getValue().id);
  }
}
