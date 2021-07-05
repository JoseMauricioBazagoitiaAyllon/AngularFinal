import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartamentoService } from '../../departamentos/departamento.service';


enum Action{
  EDIT='edit',
  NEW = 'new'
}


@Component({
  selector: 'app-modal-dep',
  templateUrl: './modal-dep.component.html',
  styleUrls: ['./modal-dep.component.scss']
})
export class ModalDepComponent implements OnInit {


  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private DepSvs : DepartamentoService) { }

  DepForm = this.fb.group({
    Cod_Dep: ['',Validators.required],
    Nombre_Dep: ['',Validators.required],
  });
  ngOnInit(): void {
    console.log(this.data.Dep.hasOwnProperty('Cod_Dep'))
    if(this.data.Dep.hasOwnProperty('Cod_Dep')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar Departamento";
      this.pathFormData();
    }
  }
  onSave(): void{
    const formValue = this.DepForm.value;
    if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.DepSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data?.Dep?.Cod_Dep;
      console.log("Entro en else");
      this.DepSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }


  private pathFormData():void{
    this.DepForm.patchValue({
      Cod_Dep: this.data?.Dep?.Cod_Dep,
      Nombre_Dep: this.data?.Dep?.Nombre_Dep,
    })
  }
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}

}
