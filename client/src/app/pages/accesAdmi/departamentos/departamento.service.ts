import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Dep } from 'src/app/shared/models/admi.interface'; 

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }
  getall():Observable<Dep[]>{
    return this.http.get<Dep[]>(`/api/Departamento`)
    .pipe(catchError(this.handlerError));
  }
  getById(CodEmp:number):Observable<Dep>{
    return this.http.get<any>(`/api/Departamento/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Emp:Dep):Observable<Dep>{
    return this.http.post<Dep>(`/api/Departamento`,Emp)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Emp:Dep ):Observable<Dep>{
    return this.http.put<Dep>(`/api/Departamento/${CodEmp}`,Emp)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Dep>(`/api/Departamento/${CodEmp}`)
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
