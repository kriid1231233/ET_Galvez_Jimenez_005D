import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialdeeventosPageRoutingModule } from './historialdeeventos-routing.module';

import { HistorialdeeventosPage } from './historialdeeventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialdeeventosPageRoutingModule
  ],
  declarations: [HistorialdeeventosPage]
})
export class HistorialdeeventosPageModule {}
