import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Organisation } from '../../../core/models/organisation.model';

@Component({
  selector: 'running-groups-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: [ './clubs.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubsComponent implements OnInit {
  keywords: string;

  @Input() organisations: Organisation[];

  @Output() search = new EventEmitter<string>();
  @Output() selectOrganisation = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch(keywords: string): void {
    this.search.emit(keywords);
  }

  onSelectOrganisation(organisationId: string): void {
    this.selectOrganisation.emit(organisationId);
  }
}
