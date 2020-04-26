import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsFilterComponent } from './icons-filter/icons-filter.component';
import { IconsListComponent } from './icons-list/icons-list.component';
import { IconsListItemComponent } from './icons-list/icons-list-item/icons-list-item.component';
import { IconsListCategoryComponent } from './icons-list/icons-list-category/icons-list-category.component';
import { IconsFilterPipe } from './icons-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SelectedIconInfoComponent } from './selected-icon-info/selected-icon-info.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    IconsFilterComponent,
    IconsListComponent,
    IconsListItemComponent,
    IconsListCategoryComponent,
    SelectedIconInfoComponent,
    IconsFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    IconsFilterComponent,
    IconsListComponent,
    SelectedIconInfoComponent
  ]
})
export class IconsModule { }
