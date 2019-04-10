import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'InterceptorSkipHeader': 'X-Skip-Interceptor'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GalleryserviceService {

  constructor(private http:HttpClient) { }

  gallerylist(){
    return this.http.get('http://localhost:8000/api/carousle/',httpOptions)
  }
  gallryupload(data){
    return this.http.post('http://localhost:8000/api/carousle/upload/',data)
  }
  gallerydelete(id){
    console.log(id)
    return this.http.delete('http://localhost:8000/api/carousle/'+id+'/')
  }
}
