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
}
