import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadComponent } from './actividad.component';
import { MaterialModule } from 'src/app/material.model';

@NgModule({
  declarations: [
    ActividadComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule,
    MaterialModule
  ]
})
export class ActividadModule { }
