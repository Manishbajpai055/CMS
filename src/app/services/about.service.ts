import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  About() {
    return this.http.get('http://localhost:3004/pages/1/');

  }
  editAbout(data) {
    var id=1
    return this.http.put('http://localhost:3004/pages/'+id, {"body":"hdshdhskdhakjdhkjadjkaskjdhakdkkajd","keyword":"kjfhuhhf"});

  }

}
