import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunCardComponent } from './run-card/run-card.component';
import { WeekNavigationComponent } from './week-navigation/week-navigation.component';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '../pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ RunCardComponent, WeekNavigationComponent ],
  imports: [ CommonModule, MatCardModule, MatIconModule, MatButtonModule, PipesModule ],
  exports: [ RunCardComponent, WeekNavigationComponent ],
})
export class ComponentsModule {}
