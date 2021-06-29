import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Admi, AdmiResponse , Roles} from 'src/app/shared/models/admi.interface';
import {environment} from '../../../environments/environment'
import{JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';
const helper = new JwtHelperService();
import {catchError , map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<Roles>(null);

  constructor(private http:HttpClient, private router:Router) { 
    this.CheckToken();
  }
  
  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  
  login(authData: Admi): Observable<AdmiResponse | void> {
    return this.http
      .post<AdmiResponse>(`/api/login`, authData)
      .pipe(
        map((res: AdmiResponse) => {
          console.log("resp->", res);
          this.saveToken(res.token);
          //this.loggedIn.next(true);
          this.loggedIn.next(true);
          return res;
          //this.user.next(user);
          //return user;
        }),
        catchError((err) => this.handlerError(err))
      );
  }
  logout():void{
    localStorage.removeItem('token');
    // set UserIsLogged = false
    this.loggedIn.next(false);
    this.router.navigate(['login'])
  }
  private CheckToken():void{
    let admiToken : any= localStorage.getItem('token');
    if (admiToken == null){
        admiToken = undefined;
    }
    const isExpired = helper.isTokenExpired(admiToken);
    console.log('IsExpired ->' , isExpired)
    if(isExpired){
      this.logout();
    }else{
      this.loggedIn.next(true);
    }
    //set AdmiIsLogged = isExpired;
  }
  private saveToken(token : string):void{
    localStorage.setItem('token', token);
  }
  private handlerError(err:any): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
