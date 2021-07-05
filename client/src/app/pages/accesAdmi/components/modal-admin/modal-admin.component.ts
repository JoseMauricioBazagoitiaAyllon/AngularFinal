import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../admin/admin.service'; 

enum Action{
  EDIT='edit',
  NEW = 'new'
}
@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.scss']
})
export class ModalAdminComponent implements OnInit {

  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private AdSvs : AdminService) { }

  AdmiForm = this.fb.group({
    User_Name: ['',Validators.required],
    User_Email: ['',Validators.required],
    User_password: ['',Validators.required], 
    Cod_Emp: ['',Validators.required], 
  });
  ngOnInit(): void {
    console.log(this.data.Admi.hasOwnProperty('Cod_Admi'))
    if(this.data.Admi.hasOwnProperty('Cod_Admi')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar Acceso";
      this.pathFormData();
    }
  }
  onSave(): void{
    const formValue = this.AdmiForm.value;
    if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.AdSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data.Admi?.Cod_Emp;
      console.log("Entro en else");
      this.AdSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }


  private pathFormData():void{
    this.AdmiForm.patchValue({
      User_Name: this.data?.Admi?.User_Name,
      User_Email: this.data?.Admi?.User_Email,
      User_password: this.data?.Admi?.User_password,
      Cod_Emp: this.data?.Admi?.Cod_Emp,
    })
  }
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}
}
