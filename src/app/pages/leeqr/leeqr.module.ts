import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeeqrPageRoutingModule } from './leeqr-routing.module';

import { LeeqrPage } from './leeqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeeqrPageRoutingModule
  ],
  declarations: [LeeqrPage]
})
export class LeeqrPageModule {}
