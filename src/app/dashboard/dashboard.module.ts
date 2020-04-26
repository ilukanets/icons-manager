import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconsModule } from './icons/icons.module';

import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    LayoutModule,
    SharedModule
  ],
  exports: [
    IconsModule
  ]
})
export class DashboardModule { }
