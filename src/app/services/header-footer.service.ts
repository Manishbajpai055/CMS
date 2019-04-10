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

  HeaderFooterurl : any = 'http://127.0.0.1:8000/api/siteheaderfoooter/1/update/'
  FooterDetailurl : any = 'http://127.0.0.1:8000/api/siteheaderfoooter/1/update/'
  constructor(private http:HttpClient) { }
  postHeadeFooter(data){
    return this.http.put(this.HeaderFooterurl,data).subscribe(res=>{
    })
  }
  getHeadeFooter(){
    return this.http.get(this.HeaderFooterurl, httpOptions)
  }
  getHeader(){
    return this.http.get(this.HeaderFooterurl ,httpOptions)
  }

  updatefooter(data){
    return this.http.put(this.FooterDetailurl,data).subscribe(res=>{
    })
  }
  getupdatefooter(){
    return this.http.get(this.FooterDetailurl ,httpOptions)
  }
}
