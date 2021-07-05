import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescuentosService } from '../../descuentos/descuentos.service';

enum Action{
  EDIT='edit',
  NEW = 'new'
}

@Component({
  selector: 'app-modal-des',
  templateUrl: './modal-des.component.html',
  styleUrls: ['./modal-des.component.scss']
})
export class ModalDesComponent implements OnInit {
  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private DesSvs : DescuentosService) { }

  DesForm = this.fb.group({
    Nombre_Des: ['',Validators.required],
    Porcentaje_Des: ['',Validators.required],
  });
  ngOnInit(): void {
    console.log(this.data.Des.hasOwnProperty('Cod_Descuento'))
    if(this.data.Des.hasOwnProperty('Cod_Descuento')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar Descuento";
      this.pathFormData();
    }
  }
  onSave(): void{
    const formValue = this.DesForm.value;
    if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.DesSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data?.Des?.Cod_Descuento;
      console.log("Entro en else");
      this.DesSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }


  private pathFormData():void{
    this.DesForm.patchValue({
      Nombre_Des: this.data?.Des?.Nombre_Des,
      Porcentaje_Des: this.data?.Des?.Porcentaje_Des,
    })
  }
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}

}
