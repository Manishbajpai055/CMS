import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './utilservices.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http:HttpClient,private util:UtilService) { }
  creatguestquestions(data){
    return this.http.post(this.util.getDomain()+'api/students/qna/create/',data)
  }
  guestqnaList(){
    return this.http.get(this.util.getDomain()+'api/students/qna/',)
   }
   guestqnadelete(id){
     return this.http.delete(this.util.getDomain()+'api/students/qna/'+id+'/delete/')
   }
}
