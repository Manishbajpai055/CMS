import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {BlogService } from '../../../services/blog.service'
import { AdminBlogComponent } from '../blog.component';
import { UtilService } from 'src/app/services/utilservices.service';

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
    uploadImagePath: this.util.getDomain()+'/blog/images/upload/',
    placeholder: 'Enter Text Here',
  };
  loading
  updateblogdetail: any;

  constructor(private newblog: BlogService,private adminblog: AdminBlogComponent,private formBuilder: FormBuilder,private util:UtilService) { }

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
    this.submitted = true;
    if (this.NewPost.invalid) {
      return;
    }
    this.loading= true
    if (this.adminblog.isupdateeditoractive==true){
      this.newblog.updateblog(this.adminblog.slug,this.NewPost.value).subscribe(res=>{
        this.loading= false        
        this.adminblog.islistactive=true
        this.adminblog.iseditoractive= false
      })
    }
      this.newblog.newblog(this.NewPost.value).subscribe(res=>{
      this.loading= false        
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
