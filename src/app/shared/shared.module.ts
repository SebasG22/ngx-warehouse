import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { RouterModule } from '@angular/router';
import { OnsenModule } from 'ngx-onsenui';
import { NgxsModule } from '@ngxs/store';
import { SharedState } from '../shared/states/shared.state';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OnsenModule,
    NgxsModule.forFeature([
      SharedState
    ])
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
