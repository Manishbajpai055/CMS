import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  public errorMessage = "null";
  public loginForm: FormGroup;
    ngOnInit(): void {
    this.loginForm = this.fb.group ( {
      usernname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
    throw new Error("Method not implemented.");
  } 
     
email = 'peter@klaven';
password = 'cityslicka';

constructor( private router: Router,private fb: FormBuilder) {
}

onSubmit() {
  this.errorMessage = 'network problem';
}

}