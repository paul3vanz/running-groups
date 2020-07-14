import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { GetSessionQuery } from '@running-groups/api';

@Component({
  selector: 'running-groups-run-card',
  templateUrl: './run-card.component.html',
  styleUrls: [ './run-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunCardComponent implements OnInit {
  @Input() session: GetSessionQuery;
  @Output() bookSession = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onBookSession(sessionId: string) {
    this.bookSession.emit(sessionId);
  }

  get hasDistanceOrTopography() {
      return this.session.run?.topography?.title
  }
}
