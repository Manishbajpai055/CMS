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
export class HeaderFooterService {

  constructor(private http:HttpClient,private util:UtilService) { }
  postHeadeFooter(data){
    return this.http.put(this.util.getDomain()+'api/siteheaderfoooter/1/update/',data).subscribe(res=>{
    })
  }
  getHeadeFooter(){
    return this.http.get(this.util.getDomain()+'api/siteheaderfoooter/1/', httpOptions)
  }
  getHeader(){
    return this.http.get(this.util.getDomain()+'api/siteheaderfoooter/1/' ,httpOptions)
  }
  getupdatefooter(){
    return this.http.get(this.util.getDomain()+'api/siteheaderfoooter/1/' ,httpOptions)
  }
}
