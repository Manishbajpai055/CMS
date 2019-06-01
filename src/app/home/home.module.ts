import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogModule } from './blog/blog.module';
import { BlogliistComponent } from './blog/blogliist/blogliist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgxSummernoteModule, } from 'ngx-summernote';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogsummeryComponent } from './blog/blogsummery/blogsummery.component';
import { ShareButtonsModule } from 'ngx-sharebuttons';

@NgModule({
  declarations: [ContactusComponent, 
    HomepageComponent, NavbarComponent,HomeComponent, AboutComponent, CarouselComponent,BlogliistComponent,
     HeaderComponent, FooterComponent, PageComponent, GalleryComponent,BlogsummeryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule , 
    ReactiveFormsModule,
    BlogModule,
    NgxSummernoteModule,
    NgxPaginationModule,
    ShareButtonsModule.forRoot(),
  ],
  exports: [ContactusComponent, 
    HomepageComponent, NavbarComponent,HomeComponent, AboutComponent, CarouselComponent,BlogliistComponent,
     HeaderComponent, FooterComponent, PageComponent, GalleryComponent],
  
  providers: [] 
})
export class HomeModule { }
