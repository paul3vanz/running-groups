import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '@running-groups/api';

@Component({
  templateUrl: './clubs-page.component.html',
  styleUrls: [ './clubs-page.component.css' ],
})
export class ClubsPageComponent implements OnInit {
  organisations: any[];

  constructor(private organisationService: OrganisationService) {}

  ngOnInit(): void {}

  onLoadOrganisations(keywords: string): void {
    this.organisationService
      .listOrganisations({
        name: {
          contains: keywords,
        },
      })
      .then(({ items }) => {
        this.organisations = items;
      });
  }

  onSearch(keywords: string): void {
    this.onLoadOrganisations(keywords);
  }

  onSelectOrganisation(organisationId: string): void {
    this.organisationService.setActiveOrganisation(organisationId);
  }
}
