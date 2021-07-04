import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rol = "";
  showFiller = false;
  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }
  changeRol(nombre : string){
    this.rol = nombre;
    this.SaveRol();
  }
  private SaveRol(){
    localStorage.setItem('Rol', this.rol);
  } 

}
export class SidenavAutosizeExample {
  
}
