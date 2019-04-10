import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {BlogService } from '../../../services/blog.service'
import { AdminBlogComponent } from '../blog.component';

@Component({
  selector: 'app-blogeditor',
  templateUrl: './blogeditor.component.html',
  styleUrls: ['./blogeditor.component.css']
})
export class BlogeditorComponent implements OnInit {
  NewPost: FormGroup
  submitted
  config = {
    height: '200px',
    uploadImagePath: 'http://127.0.0.1:8000/blog/images/upload/',
    placeholder: 'Enter Text Here',
  };
  updateblogdetail: any;

  constructor(private newblog: BlogService,private adminblog: AdminBlogComponent,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.NewPost = this.formBuilder.group({
      title: ['', Validators.required],
     content: ['', Validators.required]
  })
    if (this.adminblog.isupdateeditoractive===true){
      this.newblog.blodetail(this.adminblog.slug).subscribe(res =>{
        this.updateblogdetail = res
        this.NewPost.get('title').setValue(this.updateblogdetail.title) 
        this.NewPost.get('content').setValue(this.updateblogdetail.content)
     })
    }
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    if (this.NewPost.invalid) {
      return;
    }
    if (this.adminblog.isupdateeditoractive==true){
      this.newblog.updateblog(this.adminblog.slug,this.NewPost.value).subscribe(res=>{
        console.log(res)
        this.adminblog.islistactive=true
        this.adminblog.iseditoractive= false
      })
    }
      
      this.newblog.newblog(this.NewPost.value).subscribe(res=>{
        console.log(res)
        this.adminblog.islistactive=true
      this.adminblog.iseditoractive= false
      }) 
  }
  goback(){
      this.adminblog.islistactive=true
      this.adminblog.iseditoractive= false
  }


get f() { return this.NewPost.controls; }

}
