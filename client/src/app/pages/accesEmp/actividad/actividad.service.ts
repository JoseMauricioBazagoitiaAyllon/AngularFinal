import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Act } from 'src/app/shared/models/empl.interface';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http:HttpClient) { }
  getall():Observable<Act[]>{
    return this.http.get<Act[]>(`/api/Actividad_De_Empleado`)
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
