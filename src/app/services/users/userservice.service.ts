import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from '../utilservices.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient,private util:UtilService) { }
  UsersList() {
    return this.http.get(this.util.getDomain()+'api/userslist/');
  }
  NewUser(data){
    return this.http.post(this.util.getDomain()+'api/user/new/',data);
  }
  DeleteUser(id){
    return this.http.delete(this.util.getDomain()+'api/user/'+id+'/delete/');
  }
  ValidatorService(data){
    return this.http.post(this.util.getDomain()+'api/user/usernamevalidat/',data);
  }
}
