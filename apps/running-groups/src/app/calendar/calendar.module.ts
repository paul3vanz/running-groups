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
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PipesModule } from '../core/pipes/pipes.module';
import { AuthenticatedGuard } from '../core/guards/authenticated.guard';
import { ComponentsModule } from '../core/components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmCancelSessionBookingDialogComponent } from '../core/components/confirm-cancel-session-booking-dialog/confirm-cancel-session-booking-dialog.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [ CalendarPageComponent, FilterDialogComponent, CalendarListComponent, CalendarComponent ],
  entryComponents: [ ConfirmCancelSessionBookingDialogComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPageComponent,
        canActivate: [ AuthenticatedGuard ],
      },
    ]),

    AmplifyUIAngularModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,

    ComponentsModule,
    PipesModule,
  ],
})
export class CalendarModule {}
