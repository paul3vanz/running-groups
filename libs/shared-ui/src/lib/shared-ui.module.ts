import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatToolbarModule, MatProgressBarModule, RouterModule ],
  declarations: [ HeaderComponent, FooterComponent ],
  exports: [ HeaderComponent, FooterComponent ],
})
export class SharedUiModule {}
