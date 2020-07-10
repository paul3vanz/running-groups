import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'running-groups-run-card',
  templateUrl: './run-card.component.html',
  styleUrls: [ './run-card.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunCardComponent implements OnInit {
  @Input() run: any;
  @Output() book = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
