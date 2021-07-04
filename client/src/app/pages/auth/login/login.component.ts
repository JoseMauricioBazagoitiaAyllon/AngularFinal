import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import{FormBuilder , Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterialModule } from 'src/app/material.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  hide = true;
  private subscription: Subscription = new Subscription();
  loginForm = this.fb.group({
    User_Name: ['',Validators.required],
    User_Email: ['',Validators.required],
    User_password: ['',Validators.required], 
  });
  roles: string[] =["Administrador", "Empleado", "Persona Particular"];
  opcionSeleccionado: any  = '0';
  verSeleccion: any        = '';

  constructor(private authSvc: AuthService, private fb:FormBuilder, private router:Router) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    
  }
  onLogin():void{
    if(this.loginForm.invalid){
      return;
    }
    const fromValue = this.loginForm.value;
    console.log(fromValue);
    this.subscription.add(
    this.authSvc.login(fromValue).subscribe(res => {
      if(res){
        this.router.navigate(['']);
      }
    })
    )
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    console.log(this.verSeleccion);
  }
}
