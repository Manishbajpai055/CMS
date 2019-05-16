import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../utilservices.service';

@Injectable({
  providedIn: 'root'
})
export class AnswersServiceService {

  constructor(private http:HttpClient,private util:UtilService) { }
  answerUpload(data){
    return  this.http.post(this.util.getDomain()+'api/students/answers/create/',data)
  }
  answersList(){
   return this.http.get(this.util.getDomain()+'api/students/answers/',)
  }
  answerdelete(id){
    return this.http.delete(this.util.getDomain()+'api/students/answers/'+id+'/delete/')
  }
}

