import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './utilservices.service';
import { Observable } from 'rxjs';
import { Page } from '../models';

const httpOptions = {
  headers: new HttpHeaders({
    'InterceptorSkipHeader': 'X-Skip-Interceptor'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PageserviceService {

  constructor(private http:HttpClient,private util:UtilService) { }
  pagelist(): Observable<Page[]>{
    return this.http.get<Page[]>(this.util.getDomain()+'api/pages/',httpOptions)
  }
  pagedetail(slug): Observable<Page[]>{
    return this.http.get<Page[]>(this.util.getDomain()+'api/pages/'+slug+'/',httpOptions)
  }
  pageupdate(slug,data){
    return this.http.put(this.util.getDomain()+'api/pages/'+slug+'/update/',data)
  }
  newpage(data){
    return this.http.post(this.util.getDomain()+'api/pages/create/',data)
  }
  deletepage(slug){
    return this.http.delete(this.util.getDomain()+'api/pages/'+slug+'/delet/')
  }
}
