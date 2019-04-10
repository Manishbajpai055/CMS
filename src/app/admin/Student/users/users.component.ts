import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/users/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  useradd = false
  userlist = true
  UsersList
  constructor(private userservice:UserserviceService) { }
 
  ngOnInit() {
    this.userservice.UsersList().subscribe(res =>{
      this.UsersList = res
      console.log(res)
    })
  }
  add_newUser(){
    this.useradd = true
    this.userlist = false
  }

}
