import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService } from './../../../services/blog.service'

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  blodetail: Object;
  id = 1 
  constructor(private rout:ActivatedRoute, private detail:BlogService) {
    this.rout.params.subscribe( params => console.log(params) );

   }

  ngOnInit() {
    this.rout.params.subscribe( params => console.log(params) );
    this.detail.blodetail(this.id).subscribe(
      data => {
        this.blodetail = data;
      })
  }

}
