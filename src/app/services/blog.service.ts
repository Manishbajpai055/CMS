import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  bloglist(){
    return this.http.get('http://localhost:3004/Blogs/')
   
  }
  blodetail(id){
    return this.http.get('http://localhost:3004/Blogs/'+id+'/')

  }
  newblog(data){
    return this.http.post('http://localhost:3004/Blogs/',data).subscribe(res=>{
    })
  
  }
  deleteblog(id){
    return this.http.delete('http://localhost:3004/Blogs/'+id+'/').subscribe(res=>{
    })
  }
  }
