import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pagelist
  constructor(private list:PageserviceService,private router:Router) { }

  ngOnInit() {
    
    this.refresh()
  }
  openPage(slug){
    console.log(slug)
    this.router.navigate(['page',slug]);
  }
  refresh(){
    this.list.pagelist().subscribe(
      data => {
        this.pagelist = data;
        
      })
  }
}
