import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'running-groups-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: [ './clubs.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubsComponent implements OnInit {
  keywords: string;

  @Input() organisations: any[];

  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch(keywords: string): void {
    this.search.emit(keywords);
  }
}
