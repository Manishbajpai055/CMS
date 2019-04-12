import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }
  
  postSubscriberinfo(data){
    return this.http.post('http://127.0.0.1:8000/api/subscribe/',data).subscribe(res=>{
    })
}
subscriberlist(){
  return this.http.get('http://127.0.0.1:8000/api/subscribe/list/')
}
subscriberDelete(id){
  return this.http.delete('http://127.0.0.1:8000/api/subscribe/'+id+'/delete/')
}
}
