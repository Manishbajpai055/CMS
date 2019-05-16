import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserserviceService } from 'src/app/services/users/userservice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  useradd = false
  userlist = true
  UsersList
  modalRef: BsModalRef;
  id
  currentuser = localStorage.getItem('user')
  constructor(private userservice:UserserviceService,private router: Router,private modalService: BsModalService) { }
 
  ngOnInit() {
    this.refresh()
  }
  add_newUser(){
    this.useradd = true
    this.userlist = false
  }
  Delete(id,template,username){ 
     this.id=id
     this.openModal(template)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.userservice.DeleteUser(this.id).subscribe(res=>{
      console.log("deleted")
      this.refresh()
      this.modalRef.hide();
    })
  }
  refresh(){
    this.userservice.UsersList().subscribe(res =>{
      this.UsersList = res
    })  
  }
  decline(): void {
    this.modalRef.hide();
  }
}
