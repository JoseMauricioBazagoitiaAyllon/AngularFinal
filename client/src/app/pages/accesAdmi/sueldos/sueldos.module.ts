import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SueldosRoutingModule } from './sueldos-routing.module';
import { SueldosComponent } from './sueldos.component';
import { MaterialModule } from 'src/app/material.model';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    SueldosComponent
  ],
  imports: [
    CommonModule,
    SueldosRoutingModule,
    MaterialModule,MatFormFieldModule
  ]
})
export class SueldosModule { }
