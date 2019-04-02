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

   }

  ngOnInit() {
    this.rout.params.subscribe( params => this.id = params.id);
    this.detail.blodetail(this.id).subscribe(
      data => {
        this.blodetail = data;
      })
  }

}
