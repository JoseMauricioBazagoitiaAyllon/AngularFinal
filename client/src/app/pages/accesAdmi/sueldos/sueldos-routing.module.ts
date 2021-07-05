import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SueldosComponent } from './sueldos.component';

const routes: Routes = [{ path: '', component: SueldosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SueldosRoutingModule { }
