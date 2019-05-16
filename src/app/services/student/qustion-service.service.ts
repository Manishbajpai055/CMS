import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../utilservices.service';

@Injectable({
  providedIn: 'root'
})
export class QustionServiceService {

  constructor(private http:HttpClient,private util:UtilService) { }
  qustionsUpload(data){
    return  this.http.post(this.util.getDomain()+'api/students/qustions/create/',data)
  }
  qustionsList(){
   return this.http.get(this.util.getDomain()+'api/students/qustions/',)
  }
  qustionsdelete(id){
    return this.http.delete(this.util.getDomain()+'api/students/qustions/'+id+'/delete/')
  }}
