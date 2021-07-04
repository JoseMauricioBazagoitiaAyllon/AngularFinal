
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from './empleados.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Cod_Emp', 'Nombre_Emp','Celular','Direccion','Cod_Dep',
'Cod_Rol', 'Cod_Sueldo', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private EmpSvc:EmpleadoService,private dialog:MatDialog){
    
  } 
  ngOnInit(): void {
    this.EmpSvc.getall().subscribe((Emp)=>{
      this.dataSource.data = Emp;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  onOpenModal(): void{
    const dialogRef = this.dialog.open(ModalComponent,{
      height: '400px',
      width:'600px',
      hasBackdrop:false,
      data:{
        title:'Mauricio'
      } ,
    });
    //dialogRef.afterClosed().
  }
}
