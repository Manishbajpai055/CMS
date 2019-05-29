import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import {BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AdminBlogComponent } from '../blog.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit, OnDestroy {
  bloglist;
  slug='' 
  modalRef: BsModalRef;
  p
  constructor(private list: BlogService , private router: Router, private rout: ActivatedRoute, private adminblog: AdminBlogComponent,private modalService: BsModalService) { }
  ngOnInit() {
   this.refresh()
  }

  
refresh(){
  this.bloglist = this.list.bloglist()
}
delet(slug,template) {
    console.log(slug,);
    this.slug = slug
    this.openModal(template)   
  }
  add_newPost() {
    this.adminblog.isupdateeditoractive=false;
    this.adminblog.iseditoractive = true;
    this.adminblog.islistactive = false;
  }

  Edit(slug: any) {
    this.adminblog.slug=slug
    this.adminblog.iseditoractive = true;
    this.adminblog.isupdateeditoractive=true;
    this.adminblog.slug=slug
    this.adminblog.islistactive = false;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.list.deleteblog(this.slug).subscribe(res =>{
      console.log("dekete")
      this.refresh()
    }).unsubscribe
    this.modalRef.hide();
  }
  decline(): void {
    this.modalRef.hide();
  }
  ngOnDestroy() {
  }
}
