import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../core/pipes/pipes.module';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthenticatedGuard } from '../core/guards/authenticated.guard';

@NgModule({
  declarations: [ ProfilePageComponent, ProfileComponent ],
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
        component: ProfilePageComponent,
        data: {
          title: 'Profile',
        },
        canActivate: [ AuthenticatedGuard ],
      },
    ]),
    AmplifyUIAngularModule,
    PipesModule,
  ],
})
export class ProfileModule {}
