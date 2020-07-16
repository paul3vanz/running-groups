import { Injectable } from '@angular/core';
import {
  APIService,
  TableSessionFilterInput,
  ListSessionsQuery,
  CreateSessionBookingMutation,
  TableSessionBookingFilterInput,
  ListSessionBookingsQuery,
} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RunsService {
  constructor(private apiService: APIService) {}

  listSessions(filter?: TableSessionFilterInput, limit?: number, nextToken?: string): Promise<ListSessionsQuery> {
    return this.apiService.ListSessions(filter, limit, nextToken);
  }

  listSessionBookings(filter?: TableSessionBookingFilterInput, limit?: number, nextToken?: string): Promise<ListSessionBookingsQuery> {
    return this.apiService.ListSessionBookings(filter, limit, nextToken);
  }

  bookSession(sessionId: string, userId): Promise<CreateSessionBookingMutation> {
    return this.apiService.CreateSessionBooking({
      sessionId,
      userId,
    });
  }
}
