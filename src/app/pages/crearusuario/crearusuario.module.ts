import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearusuarioPageRoutingModule } from './crearusuario-routing.module';

import { crearUsuario } from './crearusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrearusuarioPageRoutingModule
  ],
  declarations: [crearUsuario]
})
export class CrearusuarioPageModule {}
