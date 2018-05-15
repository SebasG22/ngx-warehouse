import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PAGES } from './pages';
import { COMPONENTS } from './components';
import { WarehouseRoutingModule } from './warehouse.router';
import { OnsenModule } from 'ngx-onsenui';
import { FilePondModule } from 'angular-filepond';

@NgModule({
  imports: [
    CommonModule,
    FilePondModule,
    ReactiveFormsModule,
    WarehouseRoutingModule
  ],
  exports: [],
  declarations: [
    PAGES,
    COMPONENTS
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class WarehouseModule { }
