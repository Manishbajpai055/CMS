import {Injectable, isDevMode} from '@angular/core';
import { HttpHeaders, HttpClient, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { FileSaverService } from 'ngx-filesaver';

@Injectable()
export class UtilService {

  constructor(private http:HttpClient,private fileservice:FileSaverService) {}

  getToken() {
    return localStorage.getItem('token');
  }

  getHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token '+localStorage.getItem('token')
      })
    };
    return httpOptions;
  }

  getDomain() {
    const apiDomain= 'https://thegeekcms.herokuapp.com/';
    return apiDomain;
  }

 
  download(url): Observable<HttpEvent<any>>{

    return this.http.get(url , {
      responseType: "blob", reportProgress: true, observe: "events", headers: new HttpHeaders(
        { 'Content-Type': 'application/json' },
      )
    });
  }
  


}


