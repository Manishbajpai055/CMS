import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private http:HttpClient) { }
  notslist(){
    return this.http.get('http://127.0.0.1:8000/api/students/notes/',)
  }
  notsCreate(data){
    return  this.http.post('http://127.0.0.1:8000/api/students/notes/create/',data)
  }
  notesDelete(id){
    return  this.http.delete('http://127.0.0.1:8000/api/students/notes/'+id+'/delete/')
  }


}
