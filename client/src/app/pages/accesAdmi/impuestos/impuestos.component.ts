import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ImpuestosService } from './impuestos.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalImpComponent } from '../components/modal-imp/modal-imp.component';
import{FormBuilder , Validators} from '@angular/forms'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.scss']
})
export class ImpuestosComponent implements OnInit {

  displayedColumns: string[] = ['Cod_Imp', 'Nombre_Imp','Porcentaje_Imp', 'actions'];
  dataSource = new MatTableDataSource();

private desrtroy$ = new Subject<any>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private ImpSvc:ImpuestosService,private dialog:MatDialog){
    
  } 
  ngOnInit(): void {
    this.ImpSvc.getall().subscribe((Imp)=>{
      this.dataSource.data = Imp;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  onDelete(Cod_Emp:number):void{
     if(window.confirm("¿Enserio Quieres Eliminar este Impuesto?")){
       this.ImpSvc.delete(Cod_Emp)
       .pipe(takeUntil(this.desrtroy$))
       .subscribe((res)=>{
         window.alert("Impuesto Eliminado");
       });
     }
  }
  onOpenModal(Imp = {}): void{
    console.log('Impuesto---->',Imp)
    const dialogRef = this.dialog.open(ModalImpComponent,{
      height: '400px',
      width:'600px',
      hasBackdrop:false,
      data:{
        title:'Nuevo Impuesto' , Imp
      } ,
    });
    //dialogRef.afterClosed().
  }

  ngOnDestroy(): void{
    this.desrtroy$.next({});
    this.desrtroy$.complete();
  }

}
