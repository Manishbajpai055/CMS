import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})  
export class CarouselService {


  constructor(private http:HttpClient) { }

  crousellist(){
    return this.http.get('http://127.0.0.1:8000/api/carousle/')
  }
  carouselupload(data){
    return this.http.post('http://127.0.0.1:8000/api/carousle/upload/',data)
  }
  carouseldelet(id){
    console.log(id)
    return this.http.delete('http://127.0.0.1:8000/api/carousle/'+id+'/')
  }
}
