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
    console.log(this.data.Emp.hasOwnProperty('Cod_Emp'))
    if(this.data.Emp.hasOwnProperty('Cod_Emp')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar Empleado";
      this.pathFormData();
    }
  }
  onSave(): void{
    const formValue = this.AdmiForm.value;
    if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.empSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data?.Emp?.Cod_Emp;
      console.log("Entro en else");
      this.empSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }


  private pathFormData():void{
    this.AdmiForm.patchValue({
      Nombre_Emp: this.data?.Emp?.Nombre_Emp,
      Celular: this.data?.Emp?.Celular,
      Direccion: this.data?.Emp?.Direccion,
      Cod_Dep: this.data?.Emp?.Cod_Dep,
      Cod_Rol: this.data?.Emp?.Cod_Rol,
      Cod_Sueldo: this.data?.Emp?.Cod_Sueldo
    })
  }
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}
}
