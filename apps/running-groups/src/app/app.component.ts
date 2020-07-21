import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteService } from './services/route.service';
import { Observable } from 'rxjs';
import { AuthService } from '@running-groups/auth';
import { APIService } from '@running-groups/api';

@Component({
  selector: 'running-groups-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  heading: string;

  constructor(
    private apiService: APIService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService
  ) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.heading = this.routeService.getDeepestRoute(this.activatedRoute).snapshot.data['title'];
    });

    this.isLoading$ = this.authService.isLoading$;

    this.apiService.OnDeleteSessionBookingListener.subscribe({
      next: (subscription) => {
        debugger;
        console.log(subscription);
        console.log('subscribed');
        alert(JSON.stringify(subscription));
      },
    });

    this.apiService.OnCreateSessionBookingListener.subscribe({
      next: (subscription) => {
        debugger;
        console.log(subscription);
        console.log('subscribed');
        alert(JSON.stringify(subscription));
      },
    });
  }
}
