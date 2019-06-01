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
    const apiDomain= isDevMode() ? 'https://shardaias.herokuapp.com/' : 'https://shardaias.herokuapp.com/';
    return apiDomain;
  }

  download(url): Observable<HttpEvent<any>>{
    if(!isDevMode()){
      url = url.replace('http://','https://')
    }
    return this.http.get(url , {
      responseType: "blob", reportProgress: true, observe: "events", headers: new HttpHeaders(
        { 'Content-Type': 'application/json' },
      )
    });
  }


}


