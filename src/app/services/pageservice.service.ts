import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {

  constructor(private http:HttpClient) { }
  pagelist(){
    return this.http.get('http://localhost:8000/page/')
   
  }
  pagedetail(slug){
    return this.http.get('http://127.0.0.1:8000/page/'+slug+'/')
      
  }
  newpage(data){
    return this.http.post('http://localhost:8000/page/',data).subscribe(res=>{
    })
  
  }
  deletepage(id){
    return this.http.delete('http://localhost:8000/page/'+id+'/').subscribe(res=>{
    })
  }
}
