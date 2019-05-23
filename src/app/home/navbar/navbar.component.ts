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
  username = 's'
  loged_in:Boolean
  admin 
  student = false
  constructor(private list:PageserviceService,private router:Router) { }

  ngOnInit() {
    
    this.refresh()
  }
  openPage(slug){
    console.log(slug)
    this.router.navigate(['page',slug]);
  }
  refresh(){
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
