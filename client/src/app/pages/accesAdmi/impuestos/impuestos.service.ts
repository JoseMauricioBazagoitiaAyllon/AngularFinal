import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Imp } from 'src/app/shared/models/admi.interface';
@Injectable({
  providedIn: 'root'
})
export class ImpuestosService {

  constructor(private http:HttpClient) { }
  getall():Observable<Imp[]>{
    return this.http.get<Imp[]>(`/api/Impuestos`)
    .pipe(catchError(this.handlerError));
  }
  getById(CodEmp:number):Observable<Imp>{
    return this.http.get<any>(`/api/Impuestos/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Imp:Imp):Observable<Imp>{
    return this.http.post<Imp>(`/api/Impuestos`,Imp)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Imp:Imp ):Observable<Imp>{
    return this.http.put<Imp>(`/api/Impuestos/${CodEmp}`,Imp)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Imp>(`/api/Impuestos/${CodEmp}`)
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
