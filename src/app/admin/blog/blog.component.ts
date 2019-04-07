import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class AdminBlogComponent implements OnInit { 
  constructor( ) { }
  iseditoractive = false
  islistactive = true
  isupdateeditoractive  = false
  slug
  ngOnInit() {

  }
 
 
}
