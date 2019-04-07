import { NgModule ,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminBlogComponent } from './blog/blog.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';
import { BlogeditorComponent } from './blog/blogeditor/blogeditor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CarousellistComponent } from './carousel/carousellist/carousellist.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { PageditorComponent } from './pages/pageditor/pageditor.component';
import { PagelistComponent } from './pages/pagelist/pagelist.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { AboutComponentadmin } from './about/about.component';


@NgModule({
  declarations: [AdmindashboardComponent, AdminComponent, SidebarComponent,
    PagesComponent, AdminBlogComponent, BloglistComponent, BlogeditorComponent,
    CarouselComponent,
    CarousellistComponent,
    HeaderFooterComponent,
    PageditorComponent,
    PagelistComponent,
    AboutComponentadmin,
    
    ],
  imports: [
    CarouselModule,
    ModalModule.forRoot(),
    CommonModule,
    RouterModule,
    HttpClientModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
      }
    }),
      AlertModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      NgxSummernoteModule,

  ], 
})
export class AdminModule { }
