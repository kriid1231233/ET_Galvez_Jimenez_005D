import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarEventoPage } from './actualizar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarEventoPageRoutingModule {}
