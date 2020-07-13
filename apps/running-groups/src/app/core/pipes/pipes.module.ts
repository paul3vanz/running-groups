import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './initials.pipe';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [ InitialsPipe, DatePipe ],
  imports: [ CommonModule ],
  exports: [ InitialsPipe ],
})
export class PipesModule {}
