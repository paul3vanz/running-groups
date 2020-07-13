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
import { CalendarComponent } from '../core/components/calendar/calendar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ CalendarPageComponent, FilterDialogComponent, CalendarListComponent, RunCardComponent, CalendarComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPageComponent,
      },
    ]),
    AmplifyUIAngularModule,
  ],
})
export class CalendarModule {}
