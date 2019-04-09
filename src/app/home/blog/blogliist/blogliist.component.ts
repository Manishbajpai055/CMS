import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogliist',
  templateUrl: './blogliist.component.html',
  styleUrls: ['./blogliist.component.css']
})
export class BlogliistComponent implements OnInit {
  bloglist
  constructor(private list: BlogService,private router:Router) { }

  ngOnInit() {

   this.list.bloglist().subscribe(
    data => {
      this.bloglist = data;
      console.log(data)
    })
  }
  openPage(slug){
    console.log(slug)
    this.router.navigate(['blog','post',slug]);
  }

}
