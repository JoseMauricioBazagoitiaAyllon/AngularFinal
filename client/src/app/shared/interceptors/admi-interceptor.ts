import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/pages/auth/auth.service";
import { AdmiResponse } from "../models/admi.interface";


@Injectable()
export class AdminInterceptor implements HttpInterceptor{
    constructor(private authSVs:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<any>{
        //if (req.url.includes('admin')) {
            const authToken: any = localStorage.getItem('token');
            debugger;
            const authReq = req.clone({
                setHeaders:{
                    Authorization:authToken,
                },
            });
            return next.handle(authReq);
        //}
        return next.handle(req);
    }
}