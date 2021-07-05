import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImpuestosService } from '../../impuestos/impuestos.service';
import { Imp } from 'src/app/shared/models/admi.interface';

enum Action{
  EDIT='edit',
  NEW = 'new'
}

@Component({
  selector: 'app-modal-imp',
  templateUrl: './modal-imp.component.html',
  styleUrls: ['./modal-imp.component.scss']
})
export class ModalImpComponent implements OnInit {
  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private ImpSvs : ImpuestosService) { }

  ImpForm = this.fb.group({
    Nombre_Imp: ['',Validators.required],
    Porcentaje_Imp: ['',Validators.required],
  });
  ngOnInit(): void {
    console.log(this.data.Imp.hasOwnProperty('Cod_Imp'))
    if(this.data.Imp.hasOwnProperty('Cod_Imp')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar Impuesto";
      this.pathFormData();
    }
  }
  onSave(): void{
    const formValue = this.ImpForm.value;
    if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.ImpSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data?.Imp?.Cod_Imp;
      console.log("Entro en else");
      this.ImpSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }


  private pathFormData():void{
    this.ImpForm.patchValue({
      Nombre_Imp: this.data?.Imp?.Nombre_Imp,
      Porcentaje_Imp: this.data?.Imp?.Porcentaje_Imp,
    })
  }
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}
}
