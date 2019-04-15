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
export class GalleryserviceService {

  constructor(private http:HttpClient,private util:UtilService) { }

  gallerylist(){
    return this.http.get(this.util.getDomain()+'api/gallery/',httpOptions)
  }
  gallryupload(data){
    return this.http.post(this.util.getDomain()+'api/gallery/upload/',data)
  }
  gallerydelete(id){
    console.log(id)
    return this.http.delete(this.util.getDomain()+'api/gallery/'+id+'/')
  }
}
