import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { Page } from 'src/app/models';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pageinfo:Page[] = [];
  constructor(private route: ActivatedRoute, private page:PageserviceService,private meta:Meta,private titleserv:Title) { }
  ngOnInit() {
    this.refresh()
  }
  refresh(){
    this.route.params.subscribe( params =>{
       this.page.pagedetail(params.slug).subscribe(
        data => {
          this.pageinfo = data;
          this.titleserv.setTitle(this.pageinfo['title'])
          this.meta.addTag({property: 'og:type', content: "article"});
          this.meta.addTag({name: 'author', content: 'SHardaIAS'});
        })
      });  
  }

}
