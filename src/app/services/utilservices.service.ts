import {Injectable, isDevMode} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Injectable()
export class UtilService {

  constructor(private http:HttpClient,private _FileSaverService: FileSaverService) {}

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

  download(url,filename){
    this.http.get(url, { observe: 'response',responseType: 'blob'}).subscribe(res => {
      this._FileSaverService.save(res.body, filename+'.pdf');
      return "done"
    });
}
}
