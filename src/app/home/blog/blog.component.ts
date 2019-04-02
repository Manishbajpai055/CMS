import { Component, OnInit } from '@angular/core';
import {BlogService } from './../../services/blog.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private list:BlogService , private router:Router,private rout:ActivatedRoute) {
    this.rout.params.subscribe( params => console.log(params) );
    this.rout.params.subscribe( params => console.log("",params) );


   }
  bloglist

  ngOnInit() {
   this.list.bloglist().subscribe(
    data => {
      this.bloglist = data;
    })
  }
  ViewDetail(id){
    console.log(id)
    this.router.navigate(['blog',id]);
  }
   
   
 }
