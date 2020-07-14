import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from './api.service';
import { OrganisationService } from './organisation.service';
import { RunsService } from './runs.service';

@NgModule({
  imports: [ CommonModule ],
  providers: [ APIService, OrganisationService, RunsService ],
})
export class ApiModule {}
