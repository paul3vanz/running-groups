import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './initials.pipe';
import { DatePipe } from './date.pipe';
import { TimePipe } from './time.pipe';
import { PacePipe } from './pace.pipe';

@NgModule({
  declarations: [ InitialsPipe, DatePipe, TimePipe, PacePipe ],
  imports: [ CommonModule ],
  exports: [ InitialsPipe, DatePipe, TimePipe, PacePipe ],
})
export class PipesModule {}
