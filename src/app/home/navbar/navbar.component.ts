import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pagelist
  sitename
  username = 's'
  loged_in:Boolean
  admin 
  student = false
  constructor(private list:PageserviceService,private router:Router,private sitemetdata:AboutService) { }

  ngOnInit() {
    this.refresh()
  }
  openPage(slug){
    console.log(slug)
    this.router.navigate(['page',slug]);
  }
  refresh(){
    this.sitemetdata.About().subscribe(res =>{
      console.log('header',res['sitename'])
      this.sitename = res['sitename']
    })
    if (localStorage.getItem('token')) {
      this.loged_in = true
      this.username = localStorage.getItem('user')
        if (localStorage.getItem('role') === 'admin') {
          this.admin=true
          this.student=false
        } else {
          this.student=true
          this.admin = false
        }

    }
    this.list.pagelist().subscribe(
      data => {
        this.pagelist = data;
        
      })
  }
}
