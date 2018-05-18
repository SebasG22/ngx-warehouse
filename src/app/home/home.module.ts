import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES, SUB_PAGES } from './pages';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../shared/shared.module';
import { OnsenModule } from 'ngx-onsenui';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    OnsenModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [PAGES],
  entryComponents: [PAGES],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
