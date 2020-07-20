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
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from '../core/components/components.module';
import { ProfileSummaryComponent } from './components/profile/profile-summary/profile-summary.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [ ProfilePageComponent, ProfileComponent, ProfileSummaryComponent, AvatarComponent ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
    MatButtonModule,
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
