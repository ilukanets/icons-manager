import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsComponent } from './pages/icons/icons.component';
import { IconsListComponent } from './components/icons-list/icons-list.component';

import { IconComponent } from './components/icon/icon.component';
import {RouterModule, Routes} from '@angular/router';
import { IconInfoComponent } from './components/icon-info/icon-info.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: IconsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    IconsListComponent,
    IconComponent,
    IconsComponent,
    IconInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    IconsListComponent,
    RouterModule
  ]
})
export class IconsModule { }
