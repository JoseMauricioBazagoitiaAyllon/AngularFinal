import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesService } from '../../roles/roles.service'; 

enum Action{
  EDIT='edit',
  NEW = 'new'
}

@Component({
  selector: 'app-modal-rol',
  templateUrl: './modal-rol.component.html',
  styleUrls: ['./modal-rol.component.scss']
})
export class ModalRolComponent implements OnInit {

  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private RolSvs : RolesService) { }

  RolForm = this.fb.group({
    Nombre_Rol: ['',Validators.required],
  });
  ngOnInit(): void {
    console.log(this.data.Rol.hasOwnProperty('Cod_Rol'))
    if(this.data.Rol.hasOwnProperty('Cod_Rol')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar Rol";
      this.pathFormData();
    }
  }
  onSave(): void{
    const formValue = this.RolForm.value;
    if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.RolSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data?.Rol?.Cod_Rol;
      console.log("Entro en else");
      this.RolSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }


  private pathFormData():void{
    this.RolForm.patchValue({
      Nombre_Rol: this.data?.Rol?.Nombre_Rol,
    })
  }
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}
}
