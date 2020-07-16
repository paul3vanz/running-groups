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

import { RouteService } from './services/route.service';

Amplify.configure({
  aws_project_region: 'us-east-1',
  aws_cognito_identity_pool_id: 'us-east-1:df0c48e2-a2cf-4237-8fa3-1f4298710088',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_XoAb4k0w5',
  aws_user_pools_web_client_id: '19al78925qii9kacvvi07kdh6l',
  oauth: {},
  aws_appsync_graphqlEndpoint: 'https://hqhrku5u2zfdfiypvrxlillffm.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
});

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
