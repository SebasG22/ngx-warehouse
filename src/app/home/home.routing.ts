import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMainPage } from './pages/main/home-main.page';

const routes: Routes = [
  { path: 'home', component: HomeMainPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }

export const routedComponents = [HomeMainPage];