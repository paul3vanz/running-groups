import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClubsPageComponent } from './containers/clubs-page/clubs-page.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../core/pipes/pipes.module';

@NgModule({
  declarations: [ ClubsPageComponent, ClubsComponent ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClubsPageComponent,
      },
    ]),
    AmplifyUIAngularModule,
    PipesModule,
  ],
})
export class ClubsModule {}
