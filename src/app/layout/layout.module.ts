import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { LayoutSidebarComponent } from './components/layout-sidebar/layout-sidebar.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutSidebarComponent,
    LayoutContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    LayoutSidebarComponent,
    LayoutContentComponent
  ]
})
export class LayoutModule { }
