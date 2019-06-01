import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';
export interface about {      
  siteAbout  
}  
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutdetail = {}
  constructor(private about: AboutService) { }
   ngOnInit() {
    this.about.About().subscribe(res => {
      this.aboutdetail = res
     })
  }

}
