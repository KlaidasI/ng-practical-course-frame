import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule { }
