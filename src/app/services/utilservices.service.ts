import {Injectable, isDevMode} from '@angular/core';
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class UtilService {

  constructor() {}

  getToken() {
    return localStorage.getItem('token');
  }

  getHeader() {
    const httpOptions = {
      headers = ({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' +this.getToken()
      })
    };
    const options = new RequestOptions(httpOptions);
    return options;
  }

  getDomain() {
    const apiDomain = 'http://127.0.0.1:8000';
    return apiDomain;
  }

}
