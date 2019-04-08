import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './utilservices.service';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient,private util:UtilService) { }

  About() {
    return this.http.get('http://127.0.0.1:8000/api/about/1/update/');

  }
  editAbout(data) {
      return this.http.put('http://127.0.0.1:8000/api/about/1/update/',data,);

  }

}
