import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  tit = "geek"
  constructor(private titleserv:Title) { }

  ngOnInit() {
    this.titleserv.setTitle(this.tit)
  }

}
