import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "../shared/user.service";
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import 'rxjs/add/operator/do';
import { exec } from "child_process";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
        // Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log(req.headers.get('No-Auth'))
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone()).do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
              }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                    localStorage.setItem('userToken',null)
                    this.router.navigateByUrl('/login');
                  }
                }
              });

        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                // headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
                setHeaders: {
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }
            });
            return next.handle(clonedreq).do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
              }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                    localStorage.setItem('userToken',null)
                    this.router.navigateByUrl('/login');
                  }
                }
              });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    
    
}