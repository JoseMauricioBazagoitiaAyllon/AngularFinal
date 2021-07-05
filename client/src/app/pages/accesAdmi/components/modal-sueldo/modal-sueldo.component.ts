import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SueldoService } from '../../sueldos/sueldo.service';

enum Action{
  EDIT='edit',
  NEW = 'new'
}



@Component({
  selector: 'app-modal-sueldo',
  templateUrl: './modal-sueldo.component.html',
  styleUrls: ['./modal-sueldo.component.scss']
})
export class ModalSueldoComponent implements OnInit {

  actionTODO = Action.NEW;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private sueldoSvs : SueldoService) { }


  SueldoForm = this.fb.group({
    Cant_Sueldo_Dia: ['',Validators.required],
    Cant_Sueldo_Horas_Extras: ['',Validators.required],
  });
  ngOnInit(): void {
    console.log(this.data?.Sueldo.hasOwnProperty('Cod_Sueldo'));
    //console.log(this.data.Sueldo);
    if(this.data?.Sueldo.hasOwnProperty('Cod_Sueldo')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar Empleado";
      this.pathFormData();
    }
  }
  onSave(): void{
    const formValue = this.SueldoForm.value;
    if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.sueldoSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data?.Sueldo?.Cod_Sueldo;
      console.log(this.data?.Sueldo?.Cod_Sueldo)
      console.log("Entro en else");
      this.sueldoSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }
  private pathFormData():void{
    this.SueldoForm.patchValue({
      Cant_Sueldo_Dia: this.data.Sueldo.Cant_Sueldo_Dia,
      Cant_Sueldo_Horas_Extras: this.data?.Sueldo?.Cant_Sueldo_Horas_Extras,
    })
  }

}
