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
import { BehaviorSubject, Observable, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Observable as ZenObservable } from 'zen-observable-ts';
import { CREATE_SESSION_BOOKING_SUBSCRIPTION } from './subscriptions/create-session-booking.subscription';
import { RunFiltersService } from './run-filters.service';
import * as moment from 'moment-mini';

@Injectable({
  providedIn: 'root',
})
export class RunsService {
  private sessions$ = new BehaviorSubject<ListSessionsQuery>(undefined);
  private loading$ = new BehaviorSubject<boolean>(false);
  private updating$ = new BehaviorSubject<boolean>(false);

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(loading: boolean) {
    this.loading$.next(loading);
  }

  getUpdating$(): Observable<boolean> {
    return this.updating$.asObservable();
  }

  setUpdating(updating: boolean) {
    this.updating$.next(updating);
  }

  getSessions$(): Observable<ListSessionsQuery> {
    return this.sessions$.asObservable();
  }

  setSessions(sessions: ListSessionsQuery) {
    this.sessions$.next(sessions);
  }

  listSessions$(filter?: TableSessionFilterInput, limit?: number, nextToken?: string): Observable<ListSessionsQuery> {
    this.setLoading(true);

    return from(this.apiService.ListSessions(filter, limit, nextToken)).pipe(
      tap(() => this.setLoading(false)),
      map((sessions) => {
        return {
          ...sessions,
          items: sessions.items.sort((a, b) => (moment(a.date).isBefore(moment(b.date)) ? -1 : 1)),
        };
      })
    );
  }

  listSessionBookings$(filter?: TableSessionBookingFilterInput, limit?: number, nextToken?: string): Observable<ListSessionBookingsQuery> {
    this.setLoading(true);

    return from(this.apiService.ListSessionBookings(filter, limit, nextToken)).pipe(tap(() => this.setLoading(false)));
  }

  createSessionBooking(sessionId: string, userId): Observable<CreateSessionBookingMutation> {
    this.setUpdating(true);

    return from(
      this.apiService.CreateSessionBooking({
        sessionId,
        userId,
      })
    ).pipe(tap(() => this.setUpdating(false)));
  }

  deleteSessionBooking(sessionId: string, userId): Observable<DeleteSessionBookingMutation> {
    this.setUpdating(true);

    return from(
      this.apiService.DeleteSessionBooking({
        sessionId,
        userId,
      })
    ).pipe(tap(() => this.setUpdating(false)));
  }

  OnCreateSessionBookingListener(): ZenObservable<OnCreateSessionBookingSubscription> {
    return API.graphql(graphqlOperation(CREATE_SESSION_BOOKING_SUBSCRIPTION)) as ZenObservable<OnCreateSessionBookingSubscription>;
  }

  mapRunFiltersToService() {}

  constructor(private apiService: APIService, private runFiltersService: RunFiltersService) {
    this.getUpdating$().subscribe(console.log);
  }
}
