import { ActivatedRoute } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { RouteService } from './route.service';

describe('RouteService', () => {
    let service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RouteService,
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.get(RouteService);
    });

    describe('getDeepestRoute()', () => {
        it('should return the deepest route', () => {
            const deepestRoute = {
                firstChild: null,
            } as ActivatedRoute;

            const route = {
                firstChild: {
                    firstChild: {
                        firstChild: deepestRoute,
                    },
                },
            } as ActivatedRoute;

            expect(service.getDeepestRoute(route)).toEqual(deepestRoute);
        });
    });
});
