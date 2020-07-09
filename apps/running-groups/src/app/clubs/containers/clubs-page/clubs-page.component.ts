import { Component, OnInit, Output } from '@angular/core';
import { APIService } from '@running-groups/api';

@Component({
  templateUrl: './clubs-page.component.html',
  styleUrls: [ './clubs-page.component.css' ],
})
export class ClubsPageComponent implements OnInit {
  organisations: any[];

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    // this.apiService.ListOrganisations().then(({ items }) => {
    //   this.organisations = items;
    // });
  }

  onLoadOrganisations(keywords: string): void {
    this.apiService
      .ListOrganisations({
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
}
