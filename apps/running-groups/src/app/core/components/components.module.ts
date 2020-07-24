import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

import { ConfirmCancelSessionBookingDialogComponent } from './confirm-cancel-session-booking-dialog/confirm-cancel-session-booking-dialog.component';
import { FilterOptionsDialogComponent } from './filter-options-dialog/filter-options-dialog.component';
import { PipesModule } from '../pipes/pipes.module';
import { RunCardComponent } from './run-card/run-card.component';
import { WeekNavigationComponent } from './week-navigation/week-navigation.component';

@NgModule({
  declarations: [ RunCardComponent, WeekNavigationComponent, ConfirmCancelSessionBookingDialogComponent, FilterOptionsDialogComponent ],
  entryComponents: [ ConfirmCancelSessionBookingDialogComponent, FilterOptionsDialogComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    PipesModule,
  ],
  exports: [ RunCardComponent, WeekNavigationComponent ],
})
export class ComponentsModule {}
