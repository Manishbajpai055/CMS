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
export class PageserviceService {

  constructor(private http:HttpClient) { }
  pagelist(){
    return this.http.get('http://127.0.0.1:8000/api/pages/',httpOptions)
  }
  pagedetail(slug){
    return this.http.get('http://127.0.0.1:8000/api/pages/'+slug+'/',httpOptions)
  }
  pageupdate(slug,data){
    return this.http.put('http://127.0.0.1:8000/api/pages/'+slug+'/update/',data)
  }
  newpage(data){
    return this.http.post('http://127.0.0.1:8000/api/pages/create/',data)
  }
  deletepage(slug){
    return this.http.delete('http://127.0.0.1:8000/api/pages/'+slug+'/delet/')
  }
}
