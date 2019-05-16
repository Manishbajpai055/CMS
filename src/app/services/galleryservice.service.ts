import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { UtilService } from './utilservices.service';
import { Observable } from 'rxjs';

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
    return this.http.post(this.util.getDomain()+'api/gallery/upload/',data,{ reportProgress: true, observe: "events"})
  }
  gallerydelete(id){
    return this.http.delete(this.util.getDomain()+'api/gallery/'+id+'/')
}
}