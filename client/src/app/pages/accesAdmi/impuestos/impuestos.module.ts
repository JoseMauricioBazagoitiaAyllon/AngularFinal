import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpuestosRoutingModule } from './impuestos-routing.module';
import { ImpuestosComponent } from './impuestos.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    ImpuestosComponent
  ],
  imports: [
    CommonModule,
    ImpuestosRoutingModule,
    MaterialModule
  ]
})
export class ImpuestosModule { }
