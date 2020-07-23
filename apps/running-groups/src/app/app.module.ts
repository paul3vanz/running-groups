import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';

import { ApiModule } from '@running-groups/api';
import { AuthModule } from '@running-groups/auth';
import { SharedUiModule } from '@running-groups/shared-ui';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';

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
  declarations: [ AppComponent ],
  imports: [ BrowserAnimationsModule, BrowserModule, MatSnackBarModule, ApiModule, AuthModule, AppRoutingModule, SharedUiModule ],
  providers: [ RouteService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
