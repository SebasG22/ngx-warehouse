import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { OnsenModule } from 'ngx-onsenui';
import { AuthState } from './auth/states/auth.state';
import { SERVICES } from './auth/services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxsModule.forRoot([
    ]),
    NgxsFormPluginModule.forRoot(),
  ],
  providers: [
    SERVICES
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
