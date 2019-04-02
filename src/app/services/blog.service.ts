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
  }
