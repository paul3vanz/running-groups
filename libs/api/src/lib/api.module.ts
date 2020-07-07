import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from './api.service';

@NgModule({
  imports: [ CommonModule ],
  providers: [ APIService ],
})
export class ApiModule {}
