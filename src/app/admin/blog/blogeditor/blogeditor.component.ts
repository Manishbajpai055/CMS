import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BlogService } from '../../../services/blog.service'


@Component({
  selector: 'app-blogeditor',
  templateUrl: './blogeditor.component.html',
  styleUrls: ['./blogeditor.component.css']
})
export class BlogeditorComponent implements OnInit {
  NewPost = new FormGroup({
    Keywords: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  }); 
  body=''
  constructor(private newblog:BlogService) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.NewPost.value);
    this.newblog.newblog(this.NewPost.value)


  }
   
}
