import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'running-groups-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: [ './avatar.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
