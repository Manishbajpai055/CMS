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

export class BlogService {

  constructor(private http:HttpClient,private util:UtilService) { }

  bloglist(){
    return this.http.get(this.util.getDomain()+'blog/',httpOptions)
   
  }
  blodetail(slug){
    return this.http.get(this.util.getDomain()+'blog/'+slug+'/',httpOptions)
      
  }
  newblog(data){
    return this.http.post(this.util.getDomain()+'blog/create/',data)
  
  }
  deleteblog(slug){
    return this.http.delete(this.util.getDomain()+'blog/'+slug+'/'+'delet/')
  }
  updateblog(slug,data){
    return this.http.put(this.util.getDomain()+'blog/'+slug+'/update/',data)
  }
  }
