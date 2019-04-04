import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
loginForm: FormGroup;
constructor(private fb: FormBuilder ,private router:Router) {
 this.createForm();
}
createForm() {
 this.loginForm = this.fb.group({
    username: ['', Validators.required ],
    password: ['', Validators.required ]
 });}
 onSubmit(){
   console.log(this.loginForm.value.username,this.loginForm.value.password)
 }

}