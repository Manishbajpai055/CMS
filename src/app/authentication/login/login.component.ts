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
  loading: boolean;
  ngOnInit(){
    localStorage.removeItem('user');
    localStorage.removeItem('token' );
    localStorage.removeItem('role' );
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
  this.loading = true
   console.log(this.loginForm.value.username,this.loginForm.value.password)
    const data = new FormData
    data.append('username',this.loginForm.value.username)
    data.append('password',this.loginForm.value.password)
   this.login.gettoken(data).subscribe(response => {
    localStorage.setItem('user' ,  this.loginForm.value.username);
    localStorage.setItem('role',response['role'])
    localStorage.setItem('token' , response['token']);
    console.log(response['token'],response['role'])
    if (response['role']=='admin') {
      console.log('admin routing')
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['student']);
    }
  }, error => {
    this.loading = false
    try {
      this.errorMassage = error.error['message']
    } catch (e) {
      this.errorMassage =  "Network Problem";
    }
  });
 }
}