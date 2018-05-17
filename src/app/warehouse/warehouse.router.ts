import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WareHouseFormPage } from './pages/warehouse-form/warehouse-form.page';
import { WarehouseDetailPage } from './pages/warehouse-detail/warehouse-detail.page';

const routes: Routes = [
  { path: 'item-form', component: WareHouseFormPage },
  { path: 'item-detail', component: WarehouseDetailPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseRoutingModule { }

export const routedComponents = [WareHouseFormPage];