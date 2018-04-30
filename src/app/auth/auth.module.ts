import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './states/auth.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      AuthState
    ])
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AuthModule { }
