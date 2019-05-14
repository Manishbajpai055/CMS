import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './utilservices.service';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient,private util:UtilService) { }
  
  postSubscriberinfo(data){
    return this.http.post(this.util.getDomain()+'api/subscribe/',data).subscribe(res=>{
    })
}
subscriberlist(){
  return this.http.get(this.util.getDomain()+'api/subscribe/list/')
}
subscriberDelete(id){
  return this.http.delete(this.util.getDomain()+'api/subscribe/'+id+'/delete/')
}

}
