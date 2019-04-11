import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswersServiceService {

  constructor(private http:HttpClient) { }
  answerUpload(data){
        this.http.post('go.com',data)
  }
}

