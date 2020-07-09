import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

import { ApiModule } from '@running-groups/api';
import { AuthModule } from '@running-groups/auth';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import Amplify from '@aws-amplify/core';

import awsconfig from '../../../../aws-exports';
import { RouteService } from './services/route.service';

Amplify.configure(awsconfig);
@NgModule({
  declarations: [ AppComponent, HeaderComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApiModule,
    AuthModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatProgressBarModule,
    AppRoutingModule,
  ],
  providers: [ RouteService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
