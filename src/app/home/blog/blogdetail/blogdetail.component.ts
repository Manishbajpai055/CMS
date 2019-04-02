import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  constructor(private rout:ActivatedRoute) { }

  ngOnInit() {
    this.rout.params.subscribe( params => console.log(params) );

    console.log("getgwjjkd")

  }

}
