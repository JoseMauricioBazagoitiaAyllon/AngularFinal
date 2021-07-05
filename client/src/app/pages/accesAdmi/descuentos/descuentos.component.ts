import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DescuentosService } from './descuentos.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDesComponent } from '../components/modal-des/modal-des.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Des } from 'src/app/shared/models/admi.interface';



@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss']
})
export class DescuentosComponent implements OnInit {
  displayedColumns: string[] = ['Cod_Descuento', 'Nombre_Des','Porcentaje_Des', 'actions'];
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
  
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private DesSvc:DescuentosService,private dialog:MatDialog){
      
    } 
    ngOnInit(): void {
      this.DesSvc.getall().subscribe((Des)=>{
        this.dataSource.data = Des;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    onDelete(Cod_Emp:number):void{
       if(window.confirm("¿Enserio Quieres Eliminar este Empleado?")){
         this.DesSvc.delete(Cod_Emp)
         .pipe(takeUntil(this.desrtroy$))
         .subscribe((res)=>{
           window.alert("Descuento Eliminado");
         });
       }
    }
    onOpenModal(Des = {}): void{
      console.log('Descuento---->',Des)
      const dialogRef = this.dialog.open(ModalDesComponent,{
        height: '400px',
        width:'600px',
        hasBackdrop:false,
        data:{
          title:'Nuevo Descuento' , Des
        } ,
      });
      //dialogRef.afterClosed().
    }
  
    ngOnDestroy(): void{
      this.desrtroy$.next({});
      this.desrtroy$.complete();
    }
}
