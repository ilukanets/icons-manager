import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports: [
    TooltipModule,
    LoaderComponent
  ]
})
export class SharedModule { }
