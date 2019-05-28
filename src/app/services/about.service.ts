import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './utilservices.service';
const httpOptions = {
  headers: new HttpHeaders({
    'InterceptorSkipHeader': 'X-Skip-Interceptor'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient,private util:UtilService) { }

  About() {
    return this.http.get(this.util.getDomain()+'api/sitemetadata/1/',httpOptions);

  }
  editAbout(data) {
    console.log(data)
      return this.http.put(this.util.getDomain()+'api/sitemetadata/1/update/',data);
  }

}
