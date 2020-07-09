import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteService } from './services/route.service';

@Component({
  selector: 'running-groups-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  isLoading: boolean;
  pageTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private routeService: RouteService) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.pageTitle = this.routeService.getDeepestRoute(this.activatedRoute).snapshot.data['title'];
    });
  }
}
