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
    if(this.util.getToken()===undefined||null) {
      console.log("Token Excuted")
      return next.handle(request);
    }
    else{
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${this.util.getToken()}`
        }
      });
      console.log("skipd")
      return next.handle(request);

    }
  }
}