import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { Page } from 'src/app/models';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pageinfo:Page[] = [];
  previousslug
  constructor(private route: ActivatedRoute, private page:PageserviceService) { }
  ngOnInit() {
    this.refresh()
  }
  refresh(){
    this.route.params.subscribe( params =>{
       this.page.pagedetail(params.slug).subscribe(
        data => {
          this.pageinfo = data;
        })
      });  
  }


}
