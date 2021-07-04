import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  rol = "";
  showFiller = false;
  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }
  changeRol(nombre : string){
    this.rol = nombre;
    this.SaveRol();
    window.location.reload();
  }
  private SaveRol(){
    localStorage.setItem('Rol', this.rol);
  } 
}
