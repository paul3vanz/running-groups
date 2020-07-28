import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'running-groups-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
