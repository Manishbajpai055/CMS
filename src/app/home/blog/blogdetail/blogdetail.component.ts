import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService } from './../../../services/blog.service'
import * as marked from 'marked';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  blodetail: Object;
  slug 
  constructor(private rout:ActivatedRoute, private detail:BlogService,private elementRef: ElementRef,
    private renderer: Renderer2) {
   }

  ngOnInit() {
    this.rout.params.subscribe( params => this.slug = params.slug);
    this.detail.blodetail(this.slug).subscribe(
      data => {
        console.log(data)
        this.blodetail = data;
      })
     
  }

}
