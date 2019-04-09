import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BlogService } from '../../../services/blog.service'
import { AdminBlogComponent } from '../blog.component';

@Component({
  selector: 'app-blogeditor',
  templateUrl: './blogeditor.component.html',
  styleUrls: ['./blogeditor.component.css']
})
export class BlogeditorComponent implements OnInit {
  NewPost = new FormGroup({
    keywords: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
  });
  config = {
    height: '200px',
    uploadImagePath: 'http://127.0.0.1:8000/blog/images/upload/',
    placeholder: 'Enter Text Here',
  };
  updateblogdetail: any;
  constructor(private newblog: BlogService,private adminblog: AdminBlogComponent) { }

  ngOnInit() {
    if (this.adminblog.isupdateeditoractive===true){
      this.newblog.blodetail(this.adminblog.slug).subscribe(res =>{
        this.updateblogdetail = res
        this.NewPost.get('title').setValue(this.updateblogdetail.title) 
        this.NewPost.get('content').setValue(this.updateblogdetail.content)
        this.NewPost.get('keywords').setValue(this.updateblogdetail.keywords)   
     })
    }
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.adminblog.isupdateeditoractive==true){
      this.newblog.updateblog(this.adminblog.slug,this.NewPost.value).subscribe(res=>{
        console.log(res)
        this.adminblog.islistactive=true
        this.adminblog.iseditoractive= false
      })
    }
    else{
      this.newblog.newblog(this.NewPost.value).subscribe(res=>{
        console.log(res)
        this.adminblog.islistactive=true
      this.adminblog.iseditoractive= false
      }) 
    } 
  }
  goback(){
      this.adminblog.islistactive=true
      this.adminblog.iseditoractive= false
  }
}
