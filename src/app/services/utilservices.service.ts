import {Injectable, isDevMode} from '@angular/core';
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class UtilService {

  constructor() {}

  getToken() {
    return localStorage.getItem('token');
  }

  getHeader() {
    
    return this.getToken();
  }

  getDomain() {
    const apiDomain = 'http://127.0.0.1:8000';
    return apiDomain;
  }

}
