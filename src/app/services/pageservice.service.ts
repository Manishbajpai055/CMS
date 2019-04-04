import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {

  constructor(private http:HttpClient) { }
  pagelist(){
    return this.http.get('http://localhost:3004/pages/')
   
  }
  blodetail(id){
    return this.http.get('http://localhost:3004/pages/'+id+'/')
      
  }
  newpage(data){
    return this.http.post('http://localhost:3004/pages/',data).subscribe(res=>{
    })
  
  }
  deletepage(id){
    return this.http.delete('http://localhost:3004/pages/'+id+'/').subscribe(res=>{
    })
  }
}
