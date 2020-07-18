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

@NgModule({
  declarations: [ CalendarPageComponent, FilterDialogComponent, CalendarListComponent ],
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
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,

    ComponentsModule,
    PipesModule,
  ],
})
export class CalendarModule {}
