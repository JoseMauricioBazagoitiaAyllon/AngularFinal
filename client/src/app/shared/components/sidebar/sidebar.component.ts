import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { UtilsService } from '../../services/util.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authSvs:AuthService , private ustilsSvs:UtilsService) { }

  ngOnInit(): void {}
  onExit(): void{
    this.authSvs.logout();
    this.ustilsSvs.openSidebar(false);
  }



  Rol = localStorage.getItem ( 'Rol' );
  refresh(): void { window.location.reload(); }
}
