import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmiRoutingModule } from './admi-routing.module';
import { AdmiComponent } from './admi.component';


@NgModule({
  declarations: [
    AdmiComponent
  ],
  imports: [
    CommonModule,
    AdmiRoutingModule
  ]
})
export class AdmiModule { }
