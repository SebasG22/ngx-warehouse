import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { RouterModule } from '@angular/router';
import { OnsenModule } from 'ngx-onsenui';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OnsenModule,
  ],
  exports: [
    COMPONENTS
  ],
  declarations: [
    COMPONENTS
  ],
  entryComponents: [
    COMPONENTS
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
