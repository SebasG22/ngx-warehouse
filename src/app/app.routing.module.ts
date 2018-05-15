import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'warehouse/item-form', loadChildren: './warehouse/warehouse.module#WarehouseModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
