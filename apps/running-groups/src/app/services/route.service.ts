import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteService {

    getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
        let deepestRoute = route;

        while (deepestRoute.firstChild) {
            deepestRoute = deepestRoute.firstChild;
        }

        return deepestRoute;
    }

}
