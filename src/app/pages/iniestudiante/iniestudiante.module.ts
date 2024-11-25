import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IniestudiantePageRoutingModule } from './iniestudiante-routing.module';
import { IniestudiantePage } from './iniestudiante.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniestudiantePageRoutingModule
  ],
  declarations: [IniestudiantePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IniestudiantePageModule {}
