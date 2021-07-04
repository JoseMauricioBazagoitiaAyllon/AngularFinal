import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule } from 'src/app/material.model';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../services/util.service';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule, MaterialModule, RouterModule
  ],
  exports:[SidebarComponent],
  providers:[UtilsService]
})
export class SidebarModule { }
