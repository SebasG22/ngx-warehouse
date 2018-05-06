import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES, SUB_PAGES } from './pages';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../shared/shared.module';
import { OnsenModule } from 'ngx-onsenui';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    OnsenModule,
    SharedModule
  ],
  exports: [],
  declarations: [PAGES],
  entryComponents: [PAGES],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
