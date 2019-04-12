import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { RouterModule } from '@angular/router';
import { BlogliistComponent } from './blogliist/blogliist.component';
import { NgxSummernoteModule, } from 'ngx-summernote';


@NgModule({
  declarations: [BlogdetailComponent,BlogComponent,],
  imports: [
    CommonModule,
    RouterModule,
    NgxSummernoteModule
  ]
})
export class BlogModule { }
