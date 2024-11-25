import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialdeeventosPage } from './historialdeeventos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialdeeventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialdeeventosPageRoutingModule {}
