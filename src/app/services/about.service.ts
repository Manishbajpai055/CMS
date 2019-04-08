import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './utilservices.service';
import { Options } from 'selenium-webdriver/edge';
import { utils } from 'protractor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token '+localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient,private util:UtilService) { }

  About() {
    
    return this.http.get(this.util.getDomain()+'api/about/1/update/');

  }
  editAbout(data) {
      return this.http.put(this.util.getDomain()+'api/about/1/update/',data,httpOptions);

  }

}
