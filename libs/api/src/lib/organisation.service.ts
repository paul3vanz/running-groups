import { Injectable } from '@angular/core';
import { APIService, TableOrganisationFilterInput, ListOrganisationsQuery } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  activeOrganisationId: string;

  constructor(private apiService: APIService) {}

  addOrganisation() {}
  updateOrganisatiom() {}
  deleteOrganisation() {}

  listOrganisations(filter?: TableOrganisationFilterInput): Promise<ListOrganisationsQuery> {
    return this.apiService.ListOrganisations(filter);
  }

  setActiveOrganisation(organisationId: string) {
    this.activeOrganisationId = organisationId;

    localStorage.setItem('running-groups.active-organisation', organisationId);
  }
}
