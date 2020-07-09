import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from './api.service';
import { OrganisationService } from './organisation.service';

@NgModule({
  imports: [ CommonModule ],
  providers: [ APIService, OrganisationService ],
})
export class ApiModule {}
