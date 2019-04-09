import { Component, OnInit, TemplateRef } from '@angular/core';
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
export class BloglistComponent implements OnInit {
  bloglist;
  slug=''
  modalRef: BsModalRef;
  constructor(private list: BlogService , private router: Router, private rout: ActivatedRoute, private adminblog: AdminBlogComponent,private modalService: BsModalService) { }
  ngOnInit() {
   this.refresh()
  }
refresh(){
  this.list.bloglist().subscribe(
    data => {
      this.bloglist = data;
    });
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
    })
    this.modalRef.hide();
    this.refresh()
  }
  decline(): void {
    this.modalRef.hide();
  }
}
