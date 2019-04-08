import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Quill: any = null
  aboutdetail;
  constructor(private about: AboutService) { }
  ngOnInit() {
    this.about.About().subscribe(res => {
      this.aboutdetail = res
     })
  }

}
