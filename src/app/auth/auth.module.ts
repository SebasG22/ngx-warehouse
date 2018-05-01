import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './states/auth.state';
import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { SERVICES } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    COMPONENTS,
    PAGES
  ],
  providers: [

  ],
})
export class AuthModule { }
