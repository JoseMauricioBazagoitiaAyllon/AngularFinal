import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoService } from '../../empleados.service';
import {EmpleadosComponent} from '../../empleados.component'

enum Action{
  EDIT='edit',
  NEW = 'new'
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private empSvs : EmpleadoService) { }

  AdmiForm = this.fb.group({
    Nombre_Emp: ['',Validators.required],
    Celular: ['',Validators.required],
    Direccion: ['',Validators.required], 
    Cod_Dep: ['',Validators.required], 
    Cod_Rol: ['',Validators.required], 
    Cod_Sueldo: ['',Validators.required], 
  });
  ngOnInit(): void {
  }
  onSave(): void{
    const formValue = this.AdmiForm.value;
    if(this.actionTODO  = Action.NEW){
      this.empSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      window.location.reload()
    }else{
      const userId = this.data?.user?.id;
      this.empSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      window.location.reload()
    }
  }
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}
}
