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

export class BlogService {

  constructor(private http:HttpClient) { }

  bloglist(){
    return this.http.get('http://127.0.0.1:8000/blog/',httpOptions)
   
  }
  blodetail(slug){
    return this.http.get('http://127.0.0.1:8000/blog/'+slug+'/',httpOptions)
      
  }
  newblog(data){
    return this.http.post('http://127.0.0.1:8000/blog/create/',data).subscribe(res=>{
    })
  
  }
  deleteblog(id){
    return this.http.delete('http://127.0.0.1:8000/blog/'+id+'/'+'delet/').subscribe(res=>{
    })
  }
  updateblog(id,data){
    return this.http.put('http://127.0.0.1:8000/blog/'+id+'/update/',data)
  }
  }
