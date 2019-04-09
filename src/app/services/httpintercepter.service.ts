import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { UtilService } from './utilservices.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpintercepterService implements HttpInterceptor {
  constructor(public util: UtilService,private router:Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Intercepter Excuting")
    if (request.headers.has("InterceptorSkipHeader")) {
      const headers = request.headers.delete("InterceptorSkipHeader");
      console.log("skipd Login Page")
      return next.handle(request.clone({ headers }));
    }
      console.log("Token Excuted")
      request = request.clone({   
        setHeaders: {
          Authorization: `Token ${this.util.getToken()}`
        }
      });
      return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log("Oh No")
              this.router.navigate(['/auth/logout']);
            }
          }
        })
    );

    
  }
}