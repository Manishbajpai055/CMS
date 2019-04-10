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
  NewUser(){
    return this.http.get(this.util.getDomain()+'api/user/new/');
  }
}
