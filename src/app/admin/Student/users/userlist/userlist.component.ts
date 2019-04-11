import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserserviceService } from 'src/app/services/users/userservice.service';
import { UsersComponent } from '../users.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  UsersList
  modalRef: BsModalRef;
  submitted

  constructor(private modalService: BsModalService,private userservice:UserserviceService,private usercomponent:UsersComponent,private formBuilder: FormBuilder) { }
  NewUser:FormGroup
  ngOnInit() {
    this.NewUser = this.formBuilder.group({
      first_name: ['', Validators.required],
     last_name: ['', Validators.required],
     email:['',Validators.required,Validators.email],
     username:['',Validators.required],
     password:['',Validators.required],
  
  })
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    console.log(this.NewUser.value)
    if (this.NewUser.invalid) {
      return;
    }
    this.userservice.NewUser(this.NewUser.value).subscribe(res=>{
      this.usercomponent.useradd=false
      this.usercomponent.userlist = true
    })
  }
  goBack(){
   this.usercomponent.useradd=false
   this.usercomponent.userlist = true
 }
 get f() { return this.NewUser.controls; }

}
