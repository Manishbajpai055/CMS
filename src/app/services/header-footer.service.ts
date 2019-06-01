import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './utilservices.service';
import { siteMeta } from '../models';
import { Observable } from 'rxjs';


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
  getHeadeFooter(): Observable<siteMeta[]>{
    return this.http.get<siteMeta[]>(this.util.getDomain()+'api/siteheaderfoooter/1/', httpOptions)
  }
  getHeader(): Observable<siteMeta[]>{
    return this.http.get<siteMeta[]>(this.util.getDomain()+'api/siteheaderfoooter/1/' ,httpOptions)
  }
  getupdatefooter(): Observable<siteMeta[]>{
    return this.http.get<siteMeta[]>(this.util.getDomain()+'api/siteheaderfoooter/1/' ,httpOptions)
  }
}
