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
  private userToken =new BehaviorSubject<any>(null);
  
  constructor(private http:HttpClient, private router:Router) { 
    this.CheckToken();
  }
  
  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  get isAdmin$():Observable<string | null>{
    return this.role.asObservable();
  }

  get userTokenValue(): string{
    return this.userToken.getValue();
  }

  login(authData: Admi): Observable<AdmiResponse> {
    localStorage.setItem('token', " ");
    return this.http
      .post<AdmiResponse>(`/api/login`, authData)
      .pipe(
        map((AdmiResponse) => {
          console.log("resp->", AdmiResponse);
          this.saveToken(AdmiResponse.token, AdmiResponse.id,AdmiResponse.Rol);
          this.loggedIn.next(true);
          //this.role.next(res.role);
          this.userToken.next(AdmiResponse.token);
          console.log(AdmiResponse.token);
          return AdmiResponse;
          //this.user.next(user);
          //return user;
        }),
        catchError((err) => this.handlerError(err))
      );
  }
  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('Rol');
    localStorage.removeItem('id');
    // set UserIsLogged = false
    this.loggedIn.next(false);
    //this.role.next(null);
    this.userToken.next(' ');
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
      //this.role.next(admi.role);
      this.userToken.next(admiToken.userToken); 
    }
    //set AdmiIsLogged = isExpired;
  }
  private saveToken(token : string, id : any,Rol :string):void{
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('Rol', Rol);
  }
  private handlerError(err:any): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }/*
  changeRol(nombre : string){
    this.rol = nombre;
    this.SaveRol();
    window.location.reload();
  }
  private SaveRol(){
    localStorage.setItem('Rol', this.rol);
  } */
}
