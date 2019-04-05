import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BlogService } from '../../../services/blog.service'
import { AdminBlogComponent } from '../blog.component';
declare var $: any;

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

  config = {
    height: '200px',
    uploadImagePath: '/api/upload',
    placeholder: 'Enter Text Here',
  };
  constructor(private newblog: BlogService,private adminblog: AdminBlogComponent) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.NewPost.value);
    this.newblog.newblog(this.NewPost.value)
  }
  goback(){
      this.adminblog.islistactive=true
      this.adminblog.iseditoractive= false
  }
}
