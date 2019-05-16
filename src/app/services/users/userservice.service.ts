import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UtilService } from '../utilservices.service';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  configUrl='http://127.0.0.1:8000/'+'api/user/usernamevalidat/'

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
  ValidatorService(data): Observable<HttpResponse<Config>> {
    return this.http.post<Config>(
      this.util.getDomain()+'api/user/usernamevalidat/',data, { observe: 'response' },);
  }
}
