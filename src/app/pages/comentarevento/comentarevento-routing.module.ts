import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentareventoPage } from './comentarevento.page';

const routes: Routes = [
  {
    path: '',
    component: ComentareventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentareventoPageRoutingModule {}
