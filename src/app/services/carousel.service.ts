import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './utilservices.service';

const httpOptions = {
  headers: new HttpHeaders({
    'InterceptorSkipHeader': 'X-Skip-Interceptor'
  })
};

@Injectable({
  providedIn: 'root'
})  
export class CarouselService {


  constructor(private http:HttpClient,private util:UtilService) { }

  crousellist(){
    return this.http.get(this.util.getDomain()+'api/carousle/',httpOptions)
  }
  carouselupload(data){
    return this.http.post(this.util.getDomain()+'api/carousle/upload/',data)
  }
  carouseldelet(id){
    console.log(id)
    return this.http.delete(this.util.getDomain()+'api/carousle/'+id+'/')
  }
}
