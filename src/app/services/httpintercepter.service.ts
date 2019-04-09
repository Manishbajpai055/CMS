import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { UtilService } from './utilservices.service';

@Injectable()
export class HttpintercepterService implements HttpInterceptor {
  constructor(public util: UtilService) {}
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
      return next.handle(request);

    
  }
}