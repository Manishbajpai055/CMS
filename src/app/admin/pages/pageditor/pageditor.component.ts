import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-pageditor',
  templateUrl: './pageditor.component.html',
  styleUrls: ['./pageditor.component.css']
})
export class PageditorComponent implements OnInit {

  constructor(private newpage:PageserviceService,private adminpage:PagesComponent ) { }

  ngOnInit() {
  }
  NewPost = new FormGroup({
    Keywords: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });  
  config = {
    height: '200px',
    uploadImagePath: '/api/upload',
    placeholder: 'Enter Text Here',
  };
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.NewPost.value);
    this.newpage.newpage(this.NewPost.value)
  }
  goback(){
      this.adminpage.islistactive=true
      this.adminpage.iseditoractive= false
  }
}
