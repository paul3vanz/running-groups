import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import Amplify from '@aws-amplify/core';

import { CalendarPageComponent } from './containers/calendar-page/calendar-page.component';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RunCardComponent } from '../core/components/run-card/run-card.component';
import { WeekNavigationComponent } from '../core/components/week-navigation/week-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '../core/pipes/pipes.module';
import { AuthenticatedGuard } from '../core/guards/authenticated.guard';

@NgModule({
  declarations: [ CalendarPageComponent, FilterDialogComponent, CalendarListComponent, RunCardComponent, WeekNavigationComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPageComponent,
        canActivate: [ AuthenticatedGuard ],
      },
    ]),
    AmplifyUIAngularModule,
  ],
})
export class CalendarModule {}
