import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  bloglist(){
    return this.http.get('http://127.0.0.1:8000/api/')
   
  }
  }
