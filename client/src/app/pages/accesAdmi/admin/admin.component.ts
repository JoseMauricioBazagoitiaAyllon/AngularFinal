import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AdminService } from './admin.service'; 
import { MatDialog } from '@angular/material/dialog';
import { ModalAdminComponent } from '../components/modal-admin/modal-admin.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['Cod_Admi', 'User_Name','User_Email','User_password','Cod_Emp', 'actions'];
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
  
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private AdSvc:AdminService,private dialog:MatDialog){
      
    } 
    ngOnInit(): void {
      this.AdSvc.getall().subscribe((Admi)=>{
        this.dataSource.data = Admi;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    onDelete(Admi:number):void{
       if(window.confirm("¿Enserio Quieres Eliminar este Acceso?")){
         this.AdSvc.delete(Admi)
         .pipe(takeUntil(this.desrtroy$))
         .subscribe((res)=>{
           window.alert("Acceso Eliminado");
         });
       }
    }
    onOpenModal(Admi = {}): void{
      console.log('Acceso---->',Admi)
      const dialogRef = this.dialog.open(ModalAdminComponent,{
        height: '400px',
        width:'600px',
        hasBackdrop:false,
        data:{
          title:'Nuevo Acceso' , Admi
        } ,
      });
      //dialogRef.afterClosed().
    }
  
    ngOnDestroy(): void{
      this.desrtroy$.next({});
      this.desrtroy$.complete();
    }
}
