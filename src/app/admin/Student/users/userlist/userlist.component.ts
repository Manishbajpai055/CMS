import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserserviceService } from 'src/app/services/users/userservice.service';
import { UsersComponent } from '../users.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidator } from 'src/app/authentication/UsernameValidator';
import { validate } from 'graphql';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  UsersList
  modalRef: BsModalRef;
  submitted
  loading
  constructor(private modalService: BsModalService,private userservice:UserserviceService,private usercomponent:UsersComponent,private formBuilder: FormBuilder,public usernameValidator: UsernameValidator,) { }
  NewUser:FormGroup
  ngOnInit() {
    this.NewUser = this.formBuilder.group({
      first_name: ['', Validators.required],
     last_name: ['', Validators.required],
     email:['',[Validators.required,Validators.email]],
     username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required,]),this.usernameValidator.checkUsername.bind(this.usernameValidator) ],
     password:['',[Validators.required,Validators.minLength(8)]],
     
  
  })
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.f.username.errors)
    console.log(this.NewUser.value)
    var passlenght = this.NewUser.value.password
    if (this.NewUser.invalid || passlenght.length<8){
      return;
    }
    else{
      this.loading=true
    this.userservice.NewUser(this.NewUser.value).subscribe(res=>{
      this.usercomponent.useradd=false
      this.usercomponent.refresh()
      this.usercomponent.userlist = true
    }, (err: any) => {
      this.loading=false

    })
    }
  }
  goBack(){
   this.usercomponent.useradd=false
   this.usercomponent.userlist = true
 }
 get f() { return this.NewUser.controls; }

}
