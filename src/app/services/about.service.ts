import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  About(){
    return this.http.get('http://localhost:3004/about/')
   
  }
  editAbout(id){
    return this.http.get('http://localhost:3004/about/')
      
  }

}
