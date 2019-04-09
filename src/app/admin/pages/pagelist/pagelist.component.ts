import { Component, OnInit } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { PageserviceService } from 'src/app/services/pageservice.service';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit {
  pagelist
  constructor(private adminpage:PagesComponent,private list:PageserviceService) { }

  ngOnInit() {
    this.refresh()
  }
  add_newPage(){
    this.adminpage.iseditoractive=true
    this.adminpage.islistactive=false
  }
  Delete(slug){
    console.log(slug)
    this.list.deletepage(slug)
    this.refresh()
  }

  Edit(id: any) {
    console.log(id)
  }
  refresh(){
    this.list.pagelist().subscribe(
      data => {
        this.pagelist = data;
        
      })
  }
}
