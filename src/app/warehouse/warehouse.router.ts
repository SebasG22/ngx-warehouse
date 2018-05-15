import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WareHouseFormPage } from './pages/warehouse-form/warehouse-form.page';

const routes: Routes = [
  { path: '', component: WareHouseFormPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseRoutingModule { }

export const routedComponents = [WareHouseFormPage];