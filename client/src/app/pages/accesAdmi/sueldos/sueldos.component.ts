import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SueldoService } from './sueldo.service';
import { ModalSueldoComponent } from '../components/modal-sueldo/modal-sueldo.component';

@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.component.html',
  styleUrls: ['./sueldos.component.scss']
})


export class SueldosComponent implements OnInit , AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['Cod_Sueldo', 'Cant_Sueldo_Dia','Cant_Sueldo_Horas_Extras','actions'];
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
  
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private SueldoSvc:SueldoService,private dialog:MatDialog){
      
    } 
    ngOnInit(): void {
      this.SueldoSvc.getall().subscribe((Sueldo)=>{
        this.dataSource.data = Sueldo;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    onDelete(Cod_Sueldo:number):void{
       if(window.confirm("¿Enserio Quieres Eliminar este Empleado?")){
         this.SueldoSvc.delete(Cod_Sueldo)
         .pipe(takeUntil(this.desrtroy$))
         .subscribe((res)=>{
           window.alert("Sueldo Eliminado");
         });
       }
    }
    onOpenModal(Sueldo = {}): void{
      //const dialogRef = this.dialog.open(ModalSueldoComponent);
      console.log('Sueldo---->',Sueldo)
      const dialogRef = this.dialog.open(ModalSueldoComponent,{
        height: '400px',
        width:'600px',
        hasBackdrop:false,
        data:{
          title:'Nuevo Sueldo' , Sueldo
        } ,
      });
      //dialogRef.afterClosed().
    }
    ngOnDestroy(): void{
      this.desrtroy$.next({});
      this.desrtroy$.complete();
    }

}
