import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { RouterModule } from '@angular/router';
import { BlogliistComponent } from './blogliist/blogliist.component';
import { NgxSummernoteModule, } from 'ngx-summernote';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareButtonsModule,ShareButtonsOptions } from 'ngx-sharebuttons';
const options: ShareButtonsOptions = {

  theme: 'modern-light',
  gaTracking: true,
}

@NgModule({
  declarations: [BlogdetailComponent,BlogComponent,],
  imports: [
    CommonModule,
    RouterModule,
    NgxSummernoteModule,
    NgxPaginationModule,
    ShareButtonsModule.forRoot(options)

  ]
})
export class BlogModule { }
