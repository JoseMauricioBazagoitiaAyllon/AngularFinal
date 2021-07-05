import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentosRoutingModule } from './descuentos-routing.module';
import { DescuentosComponent } from './descuentos.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    DescuentosComponent
  ],
  imports: [
    CommonModule,
    DescuentosRoutingModule,
    MaterialModule
  ]
})
export class DescuentosModule { }
