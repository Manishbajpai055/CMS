import { Component, OnInit } from '@angular/core';
import {BlogService } from '../../../services/blog.service'
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { AdminBlogComponent } from '../blog.component';
import any = jasmine.any;


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  bloglist
  constructor(private list:BlogService , private router:Router,private rout:ActivatedRoute,private adminblog:AdminBlogComponent) { }

  ngOnInit() {
    this.list.bloglist().subscribe(
      data => {
        this.bloglist = data;
        
      })
  }

  Delete(id){
    console.log(id)
    this.list.deleteblog(id)
  }

  add_newPost(){
    this.adminblog.iseditoractive=true
    this.adminblog.islistactive=false
  }

  Edit(id: any) {
    console.log(id)
  }
}
