import { Injectable } from '@angular/core';
import { APIService, TableSessionFilterInput } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RunsService {
  constructor(private apiService: APIService) {}

  listSessions(filter?: TableSessionFilterInput, limit?: number, nextToken?: string) {
    return this.apiService.ListSessions(filter, limit, nextToken);
  }
}
