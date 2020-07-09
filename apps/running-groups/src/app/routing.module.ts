import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: {
      title: 'Your account',
    },
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule),
    data: {
      title: 'Calendar',
    },
  },
  {
    path: 'clubs',
    loadChildren: () => import('./clubs/clubs.module').then((m) => m.ClubsModule),
    data: {
      title: 'Clubs',
    },
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
    data: {
      title: 'Profile',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      anchorScrolling: 'enabled',
      useHash: true,
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
