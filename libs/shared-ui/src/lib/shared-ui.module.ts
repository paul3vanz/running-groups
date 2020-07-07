import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyzComponent } from './xyz/xyz.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [XyzComponent, HeaderComponent, FooterComponent],
})
export class SharedUiModule {}
