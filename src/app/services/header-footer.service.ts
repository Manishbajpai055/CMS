import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  HeaderFooterurl : any = 'http://localhost:3004/'
  FooterDetailurl : any = 'http://localhost:3004/'
  constructor(private http:HttpClient) { }
  postHeadeFooter(data){
    return this.http.put(this.HeaderFooterurl + 'headerfooter/1',data).subscribe(res=>{
    })
  }
  getHeadeFooter(){
    return this.http.get(this.HeaderFooterurl + 'headerfooter').subscribe(res=>{
    })
  }
  getHeader(){
    return this.http.get(this.HeaderFooterurl + 'headerfooter/1')
  }

  updatefooter(data){
    return this.http.put(this.FooterDetailurl + 'footerdetails/1',data).subscribe(res=>{
    })
  }
  getupdatefooter(){
    return this.http.get(this.FooterDetailurl + 'footerdetails/1')
  }
}
