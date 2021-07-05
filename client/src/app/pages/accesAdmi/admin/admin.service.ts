import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Admi } from 'src/app/shared/models/admi.interface';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }
  getall():Observable<Admi[]>{
    return this.http.get<Admi[]>(`/api/Admi`)
    .pipe(catchError(this.handlerError));
  }
  getById(CodEmp:number):Observable<Admi>{
    return this.http.get<any>(`/api/Admi/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Admi:Admi):Observable<Admi>{
    return this.http.post<Admi>(`/api/Admi`,Admi)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Admi:Admi ):Observable<Admi>{
    return this.http.put<Admi>(`/api/Admi/${CodEmp}`,Admi)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Admi>(`/api/Admi/${CodEmp}`)
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
