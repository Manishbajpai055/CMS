import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get(this.HeaderFooterurl).subscribe(res=>{
    })
  }
  getHeader(){
    return this.http.get(this.HeaderFooterurl)
  }

  updatefooter(data){
    return this.http.put(this.FooterDetailurl,data).subscribe(res=>{
    })
  }
  getupdatefooter(){
    return this.http.get(this.FooterDetailurl )
  }
}
