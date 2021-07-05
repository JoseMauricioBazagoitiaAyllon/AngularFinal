import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DepartamentoService } from './departamento.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDepComponent } from '../components/modal-dep/modal-dep.component';
import{FormBuilder , Validators} from '@angular/forms'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  displayedColumns: string[] = ['Cod_Dep', 'Nombre_Dep', 'actions'];
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
  
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private DepSvc:DepartamentoService,private dialog:MatDialog){
      
    } 
    ngOnInit(): void {
      this.DepSvc.getall().subscribe((Dep)=>{
        this.dataSource.data = Dep;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    onDelete(Cod_Dep:number):void{
       if(window.confirm("¿Enserio Quieres Eliminar este Empleado?")){
         this.DepSvc.delete(Cod_Dep)
         .pipe(takeUntil(this.desrtroy$))
         .subscribe((res)=>{
           window.alert("Despartamento Eliminado");
         });
       }
    }
    onOpenModal(Dep = {}): void{
      console.log('DEpartamento---->',Dep)
      const dialogRef = this.dialog.open(ModalDepComponent,{
        height: '400px',
        width:'600px',
        hasBackdrop:false,
        data:{
          title:'Nuevo Departamento' , Dep
        } ,
      });
      //dialogRef.afterClosed().
    }
  
    ngOnDestroy(): void{
      this.desrtroy$.next({});
      this.desrtroy$.complete();
    }

}
