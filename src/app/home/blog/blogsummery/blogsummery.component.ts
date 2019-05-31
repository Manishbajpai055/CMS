import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogsummery',
  templateUrl: './blogsummery.component.html',
  styleUrls: ['./blogsummery.component.css']
})
export class BlogsummeryComponent implements OnInit {

  constructor() { }
  @Input() content;
  sanetized_conent
  ngOnInit() {
    this.sanetized_conent = this.content.replace(/<img[^>]*>/g,'')
  }

}
