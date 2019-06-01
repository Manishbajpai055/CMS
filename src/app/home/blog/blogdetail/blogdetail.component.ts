import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService } from './../../../services/blog.service'
import { Blog } from 'src/app/models';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  blodetail:Blog[] = [];
  slug 
  constructor(private route:ActivatedRoute, private detail:BlogService) {
   }
  ngOnInit() {
    this.route.params.subscribe( params => this.slug = params.slug);
    this.detail.blodetail(this.slug).subscribe(
      data => {
        this.blodetail = data;
      })  
  }
}
