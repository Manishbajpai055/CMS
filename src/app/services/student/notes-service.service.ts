import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UtilService } from '../utilservices.service';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private http:HttpClient,private util:UtilService) { }
  notslist(){
    return this.http.get(this.util.getDomain()+'api/students/notes/',)
  }
  notsCreate(data){
    return  this.http.post(this.util.getDomain()+'api/students/notes/create/',data)
  }
  notesDelete(id){
    return  this.http.delete(this.util.getDomain()+'api/students/notes/'+id+'/delete/')
  }


}
