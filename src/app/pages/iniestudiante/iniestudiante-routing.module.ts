import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniestudiantePage } from './iniestudiante.page';

const routes: Routes = [
  {
    path: '',
    component: IniestudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniestudiantePageRoutingModule {}
