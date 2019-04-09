import {Injectable, isDevMode} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UtilService {

  constructor() {}

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
    const apiDomain = 'http://127.0.0.1:8000/';
    return apiDomain;
  }

}
