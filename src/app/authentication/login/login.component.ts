import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  ngOnInit(){
    localStorage.removeItem('user');
    localStorage.removeItem('token' );
    this.router.navigate(['auth']); 
   }
loginForm: FormGroup;
constructor(private fb: FormBuilder ,private router:Router,private login:AuthenticationService) {
 this.createForm();
}
errorMassage = ''
createForm() {
 this.loginForm = this.fb.group({
    username: ['', Validators.required ],
    password: ['', Validators.required ]
 });}
 onSubmit(){
   console.log(this.loginForm.value.username,this.loginForm.value.password)
    const data = new FormData
    data.append('username',this.loginForm.value.username)
    data.append('password',this.loginForm.value.password)
   this.login.gettoken(data).subscribe(response => {
    localStorage.setItem('user' ,  this.loginForm.value.username);
    localStorage.setItem('token' , response['token']);
    console.log(response['token'])
    this.router.navigate(['admin']);
  }, error => {
    try {
      this.errorMassage = error.error['message']
    } catch (e) {
      this.errorMassage =  "Network Problem";
    }
  });
 }
}