import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IconsModule} from './icons/icons.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
