import { Injectable } from '@angular/core';

export interface RunFilters {
  paceFrom?: string;
  paceTo?: string;
  distanceFrom?: number;
  distanceTo?: number;
}

@Injectable({
  providedIn: 'root',
})
export class RunFiltersService {
  filters: RunFilters;

  constructor() {
    this.filters = {
      distanceFrom: 4,
      distanceTo: 6,
    };
  }

  getFilters() {
    return this.filters;
  }

  setFilter(filters: RunFilters) {
    this.filters = {
      ...this.filters,
      ...filters,
    };
  }
}
