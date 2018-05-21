import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingMainPage } from './pages/tracking-main/tracking-main.page';
import { TrackingEmbedPage } from './pages/tracking-embed/tracking-embed.page';

const routes: Routes = [
  { path: '', component: TrackingMainPage },
  { path: 'embed', component: TrackingEmbedPage },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingRoutingModule { }

export const routedComponents = [TrackingMainPage];