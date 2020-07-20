import { Injectable } from '@angular/core';
import {
  APIService,
  TableSessionFilterInput,
  ListSessionsQuery,
  CreateSessionBookingMutation,
  TableSessionBookingFilterInput,
  ListSessionBookingsQuery,
  DeleteSessionBookingMutation,
} from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RunsService {
  isLoading$ = new BehaviorSubject<boolean>(false);

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

  cancelSession(sessionId: string, userId): Promise<DeleteSessionBookingMutation> {
    return this.apiService.DeleteSessionBooking({
      sessionId,
      userId,
    });
  }
}
