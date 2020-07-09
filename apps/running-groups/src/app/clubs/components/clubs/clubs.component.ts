import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'running-groups-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: [ './clubs.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubsComponent implements OnInit {
  @Input() organisations: any[];

  constructor() {}

  ngOnInit(): void {}
}
