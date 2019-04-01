import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  favoriteColor = '';

  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    console.log("Entered  id : " + data.body);
    console.log()
 }

}
