import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderPageComponent } from './containers/leader-page/leader-page.component';
import { AuthenticatedGuard } from '../core/guards/authenticated.guard';
import { CreateGroupPageComponent } from './containers/create-group-page/create-group-page.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderPageComponent,
    canActivate: [ AuthenticatedGuard ],
    data: {
      title: 'Leader'
    }
  },
  {
    path: 'create-group',
    component: CreateGroupPageComponent,
    canActivate: [ AuthenticatedGuard ],
    data: {
      title: 'Set up a group'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderRoutingModule {}
