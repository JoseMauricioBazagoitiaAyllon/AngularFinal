import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Rol } from 'src/app/shared/models/admi.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }
  getall():Observable<Rol[]>{
    return this.http.get<Rol[]>(`/api/Roles`)
    .pipe(catchError(this.handlerError));
  }
  getById(CodEmp:number):Observable<Rol>{
    return this.http.get<any>(`/api/Roles/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Rol:Rol):Observable<Rol>{
    return this.http.post<Rol>(`/api/Roles`,Rol)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Rol:Rol ):Observable<Rol>{
    return this.http.put<Rol>(`/api/Roles/${CodEmp}`,Rol)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Rol>(`/api/Roles/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  handlerError(error: { message: any; }):Observable<never>{
    let errorMessage = "Error Unknow";
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
