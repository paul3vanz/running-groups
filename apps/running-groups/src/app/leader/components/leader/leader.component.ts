import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'running-groups-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
