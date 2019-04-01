import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomepageComponent, NavbarComponent,HomeComponent, BlogComponent, AboutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
