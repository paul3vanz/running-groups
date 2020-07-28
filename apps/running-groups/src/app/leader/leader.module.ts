import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderPageComponent } from './containers/leader-page/leader-page.component';
import { CreateGroupPageComponent } from './containers/create-group-page/create-group-page.component';
import { SessionPageComponent } from './containers/session-page/session-page.component';
import { SessionComponent } from './components/session/session.component';
import { LeaderComponent } from './components/leader/leader.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [LeaderPageComponent, CreateGroupPageComponent, SessionPageComponent, SessionComponent, LeaderComponent, CreateGroupComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    LeaderRoutingModule
  ]
})
export class LeaderModule { }
