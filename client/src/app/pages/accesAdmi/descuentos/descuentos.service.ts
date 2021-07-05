import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Des } from 'src/app/shared/models/admi.interface';
@Injectable({
  providedIn: 'root'
})
export class DescuentosService {
  constructor(private http:HttpClient) { }
  getall():Observable<Des[]>{
    return this.http.get<Des[]>(`/api/Descuentos`)
    .pipe(catchError(this.handlerError));
  }
  getById(CodEmp:number):Observable<Des>{
    return this.http.get<any>(`/api/Descuentos/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Des:Des):Observable<Des>{
    return this.http.post<Des>(`/api/Descuentos`,Des)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Des:Des ):Observable<Des>{
    return this.http.put<Des>(`/api/Descuentos/${CodEmp}`,Des)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Des>(`/api/Descuentos/${CodEmp}`)
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
