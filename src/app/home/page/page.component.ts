import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageserviceService } from 'src/app/services/pageservice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageinfo
  slug 
  previousslug
  constructor(private route: ActivatedRoute, private page:PageserviceService) { }
  ngOnInit() {
    this.refresh()
  }
  refresh(){
    this.route.params.subscribe( params =>{
       this.slug = params.slug
       this.page.pagedetail(this.slug).subscribe(
        data => {
          console.log(data)
          this.pageinfo = data;
        })
      });  
  }


}
