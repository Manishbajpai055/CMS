import { NgModule ,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminBlogComponent } from './blog/blog.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';
import { BlogeditorComponent } from './blog/blogeditor/blogeditor.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CarousellistComponent } from './carousel/carousellist/carousellist.component';
import { PageditorComponent } from './pages/pageditor/pageditor.component';
import { PagelistComponent } from './pages/pagelist/pagelist.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { AboutComponentadmin } from './about/about.component';
import { HttpintercepterService } from '../services/httpintercepter.service';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { GallerylistComponent } from './admin-gallery/gallerylist/gallerylist.component';
import { NotesComponent } from './Student/notes/notes.component';
import { QuestionsComponent } from './Student/questions/questions.component';
import { AnswerssComponent } from './Student/answerss/answerss.component';
import { UsersComponent } from './Student/users/users.component';
import { UserlistComponent } from './Student/users/userlist/userlist.component';


@NgModule({
  declarations: [AdmindashboardComponent, AdminComponent, SidebarComponent,
    PagesComponent, AdminBlogComponent, BloglistComponent, BlogeditorComponent,
    CarouselComponent,
    CarousellistComponent,
    HeaderFooterComponent,
    PageditorComponent,
    PagelistComponent,
    AboutComponentadmin,
    AdminGalleryComponent,
    GallerylistComponent,
    NotesComponent,
    QuestionsComponent,
    AnswerssComponent,
    UsersComponent,
    UserlistComponent,
    
    
    ],
  imports: [
    CarouselModule,
    FormsModule,
    ModalModule.forRoot(),
    CommonModule,
    RouterModule,
    HttpClientModule,
    AlertModule.forRoot(),
    FormsModule,
      ReactiveFormsModule,
      NgxSummernoteModule,
      NgxPaginationModule
      ], 
  providers:[
   {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpintercepterService,
      multi: true
    }
  ]
})
export class AdminModule { }
