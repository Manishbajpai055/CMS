import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  constructor(private http:HttpClient) { }
  getHeadeFooter(contact: "contact"){
    return this.http.post('http://localhost:3004/headerfooter/',contact).subscribe(res=>{
    })
  }
}
