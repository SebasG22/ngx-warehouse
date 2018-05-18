import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { OnsenModule } from 'ngx-onsenui';
import { TrackingRoutingModule } from './tracking.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TrackingRoutingModule
  ],
  exports: [],
  declarations: [COMPONENTS, PAGES],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TrackingModule { }
