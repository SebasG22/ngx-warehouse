import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './states/auth.state';
import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { SERVICES } from './services';
import { AuthRoutingModule } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { OnsenModule } from 'ngx-onsenui';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AuthRoutingModule,
    SharedModule,
    NgxsModule.forFeature([
      AuthState
    ])
  ],
  exports: [],
  declarations: [
    COMPONENTS,
    PAGES
  ],
  providers: [
    SERVICES
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
