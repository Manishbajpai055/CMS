import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswersServiceService {

  constructor(private http:HttpClient) { }
  answerUpload(data){
    return  this.http.post('http://127.0.0.1:8000/api/students/answers/create/',data)
  }
  answersList(){
   return this.http.get('http://127.0.0.1:8000/api/students/answers/',)
  }
  delete(id){
    return this.http.get('http://127.0.0.1:8000/api/students/answers/'+id+'delete/')
  }
}

