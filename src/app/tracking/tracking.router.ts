import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingMainPage } from './pages/tracking-main/tracking-main.page';

const routes: Routes = [
  { path: '', component: TrackingMainPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingRoutingModule { }

export const routedComponents = [TrackingMainPage];