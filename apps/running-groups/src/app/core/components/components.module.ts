import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunCardComponent } from './run-card/run-card.component';
import { WeekNavigationComponent } from './week-navigation/week-navigation.component';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '../pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmCancelSessionBookingDialogComponent } from './confirm-cancel-session-booking-dialog/confirm-cancel-session-booking-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterOptionsDialogComponent } from './filter-options-dialog/filter-options-dialog.component';

@NgModule({
  declarations: [ RunCardComponent, WeekNavigationComponent, ConfirmCancelSessionBookingDialogComponent, FilterOptionsDialogComponent ],
  entryComponents: [ ConfirmCancelSessionBookingDialogComponent, FilterOptionsDialogComponent ],
  imports: [ CommonModule, MatCardModule, MatDialogModule, MatIconModule, MatButtonModule, PipesModule ],
  exports: [ RunCardComponent, WeekNavigationComponent ],
})
export class ComponentsModule {}
