import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'running-groups-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit {
  @Input() loading: boolean;
  @Input() heading: string;

  constructor() {}

  ngOnInit(): void {}
}
