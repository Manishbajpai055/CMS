import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpBackend} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'InterceptorSkipHeader': 'X-Skip-Interceptor'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient,private httpbackedn:HttpBackend) { }
  gettoken(data){
    return this.http.post('http://127.0.0.1:8000/api/login/',data,httpOptions)
  }
  logout(){}
}
