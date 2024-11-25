import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarEventoPageRoutingModule } from './actualizar-evento-routing.module';

import { ActualizarEventoPage } from './actualizar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarEventoPageRoutingModule
  ],
  declarations: [ActualizarEventoPage]
})
export class ActualizarEventoPageModule {}
