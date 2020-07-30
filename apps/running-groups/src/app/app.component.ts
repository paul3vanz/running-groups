import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { RouteService } from './services/route.service';
import { Observable, combineLatest } from 'rxjs';
import { AuthService } from '@running-groups/auth';
import { RunsService } from '@running-groups/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'running-groups-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;
  heading: string;

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.heading = this.routeService.getDeepestRoute(
          this.activatedRoute
        ).snapshot.data['title'];
      });

    // this.loading$ = combineLatest([
    //   this.authService.loading$,
    //   this.runsService.getLoading$(),
    //   this.runsService.getUpdating$(),
    // ]).pipe(map((values) => values.some((value) => value)));

    this.runsService.onCreateSessionBooking().subscribe({
      next: (subscription: any) => {
        const user = subscription.value.data.onCreateSessionBooking.user;

        this.snackBar.open(
          `Session booked by ${user.firstName} ${user.lastName}`,
          'Dismiss',
          {
            duration: 4000,
          }
        );
      },
    });

    this.runsService.onCreateRun().subscribe({
      next: (subscription: any) => {
        const user = subscription.value.data.onCreateRun.user;

        this.snackBar.open(
          `Run created by ${user.firstName} ${user.lastName}`,
          'Dismiss',
          {
            duration: 4000,
          }
        );
      },
    });

    // this.runsService.onCreateSession().subscribe({
    //   next: (subscription: any) => {
    //     const user = subscription.value.data.onCreateSession.user;

    //     this.snackBar.open(
    //       `Session created by ${user.firstName} ${user.lastName}`,
    //       'Dismiss',
    //       {
    //         duration: 4000,
    //       }
    //     );
    //   },
    // });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private routeService: RouteService,
    private runsService: RunsService,
    private snackBar: MatSnackBar
  ) {}
}
