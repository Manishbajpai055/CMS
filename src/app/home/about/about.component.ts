import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';
import { QUILL_CONFIG_TOKEN, QuillConfig, QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Quill: any = null
  aboutdetail;
  constructor(private about: AboutService,private quill:QuillModule) { }
  quillEditor = new Quill()
  ngOnInit() {
    this.about.About().subscribe(res => {
      this.quillEditor.setText("wdjkqqwkhwd", 'silent') })
  }

}
