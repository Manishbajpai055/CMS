import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogliistComponent } from './blogliist/blogliist.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [BlogdetailComponent,BlogComponent,],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MarkdownModule.forChild()

    
    
  ]
})
export class BlogModule { }
