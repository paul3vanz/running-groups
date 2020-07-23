import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteService } from './services/route.service';
import { Observable } from 'rxjs';
import { AuthService } from '@running-groups/auth';
import { APIService, RunsService } from '@running-groups/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'running-groups-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  heading: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private routeService: RouteService,
    private runsService: RunsService,
    private snackBar: MatSnackBar
  ) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.heading = this.routeService.getDeepestRoute(this.activatedRoute).snapshot.data['title'];
    });

    this.isLoading$ = this.authService.isLoading$;

    this.runsService.OnCreateSessionBookingListener().subscribe({
      next: (subscription: any) => {
        const user = subscription.value.data.onCreateSessionBooking.user;

        snackBar.open(`Session booked by ${user.firstName} ${user.lastName}`, 'Dismiss', {
          duration: 4000,
        });
      },
    });
  }
}
