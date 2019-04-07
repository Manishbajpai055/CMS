import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})  
export class CarouselService {


  constructor(private http:HttpClient) { }

  crousellist(){
    return this.http.get('http://localhost:3004/crousel/')
  }
  carouselupload(data){
    return this.http.post('http://localhost:3004/crousel/',data)
  }
  carouseldelet(id){
    console.log(id)
    return this.http.delete('http://localhost:3004/crousel/'+id)
  }
}
