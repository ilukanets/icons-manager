import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconsModule } from './icons/icons.module';

import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    IconsModule
  ]
})
export class DashboardModule { }
