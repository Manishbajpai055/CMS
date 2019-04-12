import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'InterceptorSkipHeader': 'X-Skip-Interceptor'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  HeaderFooterurl : any = ''
  FooterDetailurl : any = 'http://127.0.0.1:8000/api/siteheaderfoooter/1/'
  constructor(private http:HttpClient) { }
  postHeadeFooter(data){
    return this.http.put('http://127.0.0.1:8000/api/siteheaderfoooter/1/update/',data).subscribe(res=>{
    })
  }
  getHeadeFooter(){
    return this.http.get('http://127.0.0.1:8000/api/siteheaderfoooter/1/', httpOptions)
  }
  getHeader(){
    return this.http.get(this.HeaderFooterurl ,httpOptions)
  }
  getupdatefooter(){
    return this.http.get(this.FooterDetailurl ,httpOptions)
  }
}
