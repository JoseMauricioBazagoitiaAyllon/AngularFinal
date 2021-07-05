import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Emp } from 'src/app/shared/models/admi.interface';

@Injectable({
  providedIn: 'root'
})
export class SueldoService {
  constructor(private http:HttpClient) { }
  getall():Observable<Emp[]>{
    return this.http.get<Emp[]>(`/api/Sueldos`)
    .pipe(catchError(this.handlerError));
  }
  getById(CodEmp:number):Observable<Emp>{
    return this.http.get<any>(`/api/Sueldos/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Emp:Emp):Observable<Emp>{
    return this.http.post<Emp>(`/api/Sueldos`,Emp)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Emp:Emp ):Observable<Emp>{
    return this.http.put<Emp>(`/api/Sueldos/${CodEmp}`,Emp)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Emp>(`/api/Sueldos/${CodEmp}`)
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
