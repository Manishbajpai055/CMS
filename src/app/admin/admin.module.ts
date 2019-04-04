import { NgModule ,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminBlogComponent } from './blog/blog.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';
import { BlogeditorComponent } from './blog/blogeditor/blogeditor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CarousellistComponent } from './carousel/carousellist/carousellist.component';
<<<<<<< HEAD
import { EditorModule } from '@tinymce/tinymce-angular';
import { PageditorComponent } from './pages/pageditor/pageditor.component';
import { PagelistComponent } from './pages/pagelist/pagelist.component';
=======
import { HeaderFooterComponent } from './header-footer/header-footer.component';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
=======
>>>>>>> a1060283406d4d59d14af0c5a23055a54bb58075
>>>>>>> 416def66a6d9e5c341086fbed1048f75ae48c4e0


@NgModule({
  declarations: [AdmindashboardComponent, AdminComponent, SidebarComponent,
    PagesComponent, AdminBlogComponent, BloglistComponent, BlogeditorComponent,
    CarouselComponent,
    CarousellistComponent,
<<<<<<< HEAD
    PageditorComponent,
    PagelistComponent],
=======
    HeaderFooterComponent,
    AboutComponent,
    ],
>>>>>>> a1060283406d4d59d14af0c5a23055a54bb58075
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
      }
    }),
      FormsModule,
      ReactiveFormsModule
  ],
  
 
})
export class AdminModule { }
