import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "../shared/user.service";
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
        debugger;
        // Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log(req.headers.get('No-Auth'))
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                // headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
                setHeaders: {
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }
            });
            return next.handle(clonedreq)
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
}