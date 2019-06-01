import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService } from './../../../services/blog.service'
import { Blog } from 'src/app/models';
import { Meta, Title } from '@angular/platform-browser'; 
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  blodetail:Blog[] = [];
  constructor(private router:Router,private route:ActivatedRoute, private detail:BlogService,private meta:Meta,private titleserv:Title) {
   }
  ngOnInit() {
    this.route.params.subscribe( params => { 
       this.detail.blodetail(params.slug).subscribe(data => {
        this.blodetail = data;
        this.titleserv.setTitle(data['title'])
        this.meta.addTag( {property: 'og:title', content: data['title']},);
        this.meta.addTag({name: 'author', content: 'SHardaIAS'});
        this.meta.addTag({property: 'og:type', content: "article"});
        this.meta.addTag({name: 'article:published_time', content: data ['posted_on']});
      })     
    },  error => {
      this.router.navigate(['/']);
    });
  }
}
/**
 *  meta.addTag({name: 'description', content: 'Title and Meta tags examples'});
       meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1'});
       {name: 'description', content: 'Title and Meta tags examples'},   
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},   
          {name: 'robots', content: 'INDEX, FOLLOW'},
          {name: 'author', content: 'ABCD'},<meta property="og:url" content="https://www.bloggingbasics101.com/what-is-the-difference-between-blog-categories-and-blog-tags/" />
          {name: 'keywords', content: 'TypeScript, Angular'},
          {name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD'},
          {httpEquiv: 'Content-Type', content: 'text/html'},
          {property: 'og:title', content: "My Text"},
          {property: 'og:type', content: "website"},
 */