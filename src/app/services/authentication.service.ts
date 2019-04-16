import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpBackend} from '@angular/common/http';
import { UtilService } from './utilservices.service';

const httpOptions = {
  headers: new HttpHeaders({
    'InterceptorSkipHeader': 'X-Skip-Interceptor'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient,private httpbackedn:HttpBackend,private util:UtilService) { }
  gettoken(data){
    return this.http.post(this.util.getDomain()+'api/login/',data,httpOptions)
  }
  logout(){}
}
