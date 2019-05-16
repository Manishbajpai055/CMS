import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, AuthenticationComponent  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AuthenticationModule { }
