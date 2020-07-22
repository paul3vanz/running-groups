import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteService } from './services/route.service';
import { Observable } from 'rxjs';
import { AuthService } from '@running-groups/auth';
import { APIService, RunsService } from '@running-groups/api';

@Component({
  selector: 'running-groups-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  heading: string;

  constructor(
    private runsService: RunsService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService
  ) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.heading = this.routeService.getDeepestRoute(this.activatedRoute).snapshot.data['title'];
    });

    this.isLoading$ = this.authService.isLoading$;

    setTimeout(() => {
      this.runsService.OnCreateSessionBookingListener().subscribe({
        next: (subscription) => {
          console.log(subscription);
          console.log('subscribed');
          alert(JSON.stringify(subscription));
        },
        complete: () => {
          console.log('complete');
        },
        error: () => {
          console.log('error');
        },
      });
    }, 5000);
  }
}
