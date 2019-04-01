import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { NgxEditorModule } from 'ngx-editor';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AdminBlogComponent } from './blog/blog.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';
import { BlogeditorComponent } from './blog/blogeditor/blogeditor.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';



@NgModule({
  declarations: [AdmindashboardComponent, AdminComponent, SidebarComponent, PagesComponent, AdminBlogComponent, BloglistComponent, BlogeditorComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, 
    AngularEditorModule,
    CovalentTextEditorModule,
    AngularMarkdownEditorModule,
  FormsModule,
  NgxEditorModule,
  ReactiveFormsModule
  ],
  
 
})
export class AdminModule { }
