import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QustionServiceService {

  constructor(private http:HttpClient) { }
  qustionsUpload(data){
    return  this.http.post('http://127.0.0.1:8000/api/students/qustions/create/',data)
  }
  qustionsList(){
   return this.http.get('http://127.0.0.1:8000/api/students/qustions/',)
  }
  qustionsdelete(id){
    return this.http.get('http://127.0.0.1:8000/api/students/qustions/'+id+'delete/')
  }}
