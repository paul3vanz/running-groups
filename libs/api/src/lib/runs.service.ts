import { Injectable } from '@angular/core';
import {
  APIService,
  TableSessionFilterInput,
  ListSessionsQuery,
  CreateSessionBookingMutation,
  TableSessionBookingFilterInput,
  ListSessionBookingsQuery,
  DeleteSessionBookingMutation,
  OnCreateSessionBookingSubscription,
} from './api.service';
import API, { graphqlOperation } from '@aws-amplify/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { Observable as ZenObservable } from 'zen-observable-ts';
import { CREATE_SESSION_BOOKING_SUBSCRIPTION } from './subscriptions/create-session-booking.subscription';

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

  createSessionBooking(sessionId: string, userId): Promise<CreateSessionBookingMutation> {
    return this.apiService.CreateSessionBooking({
      sessionId,
      userId,
    });
  }

  deleteSessionBooking(sessionId: string, userId): Promise<DeleteSessionBookingMutation> {
    return this.apiService.DeleteSessionBooking({
      sessionId,
      userId,
    });
  }

  OnCreateSessionBookingListener(): ZenObservable<OnCreateSessionBookingSubscription> {
    return API.graphql(graphqlOperation(CREATE_SESSION_BOOKING_SUBSCRIPTION)) as ZenObservable<OnCreateSessionBookingSubscription>;
  }
}
