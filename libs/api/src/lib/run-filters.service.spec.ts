import { TestBed } from '@angular/core/testing';

import { RunFiltersService } from './run-filters.service';

describe('RunFiltersService', () => {
  let service: RunFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
