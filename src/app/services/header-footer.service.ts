import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  constructor(private http:HttpClient) { }
  postHeadeFooter(data){
    return this.http.post('http://localhost:3004/headerfooter/',data).subscribe(res=>{
    })
  }
  getHeadeFooter(){
    return this.http.get('http://localhost:3004/headerfooter/').subscribe(res=>{
    })
  }
  updatefooter(data){
    return this.http.put('http://localhost:3004/footerdetails/1',data).subscribe(res=>{
    })
  }
  getupdatefooter(){
    return this.http.get('http://localhost:3004/footerdetails/1')
  }
}
