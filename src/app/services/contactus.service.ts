import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }
  
  postSubscriberinfo(data){
    return this.http.post('http://localhost:3004/subscriber/',data).subscribe(res=>{
    })
}
}
