import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActividadService } from './actividad.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {

  displayedColumns: string[] = ['Nro_Empleado', 'Nombre','Celular','Direccion','Horas_Extras',
'Dias_Puntual', 'Dias_Atrasado', 'Dias_que_Falto','Dias_Totales','Años_De_Antiguedad','Mes_de_informacion',
'Rol','Departamento'];
  dataSource = new MatTableDataSource();

private desrtroy$ = new Subject<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private ActSvc:ActividadService,private dialog:MatDialog){
    
  } 

  ngOnInit(): void {
    this.ActSvc.getall().subscribe((Act)=>{
      this.dataSource.data = Act;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
