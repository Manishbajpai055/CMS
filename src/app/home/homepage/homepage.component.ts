import { Component, OnInit,HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  tit = "geek"
  home: any;
  title: any;
  constructor(private titleserv:Title,private about:AboutService) { }

 
  ngOnInit() {
    this.about.About().subscribe(res =>{
      this.home = res['siteHome']
      this.title = res['sitename']
      this.titleserv.setTitle(this.title)
    })

  }
}
