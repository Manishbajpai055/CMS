import { Component, OnInit, TemplateRef } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit {
  pagelist
  modalRef: BsModalRef;
  slug = ''
  constructor(private adminpage:PagesComponent,private list:PageserviceService,private modalService: BsModalService) { }

  ngOnInit() {
    this.refresh()
  }
  add_newPage(){
    this.adminpage.isupdateeditoractive=false
    this.adminpage.iseditoractive=true
    this.adminpage.islistactive=false
  }
  Delete(template,slug){
    this.slug=slug
    console.log(slug)
    this.openModal(template)
  }
  Edit(slug: any) {
    console.log(slug)
    this.adminpage.slug=slug
    this.adminpage.iseditoractive = true;
    this.adminpage.isupdateeditoractive=true;
    this.adminpage.slug=slug
    this.adminpage.islistactive = false;
  }
  refresh(){
    this.list.pagelist().subscribe(
      data => {
        this.pagelist = data;
      })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.list.deletepage(this.slug).subscribe(res =>{
      console.log("dekete")
      this.refresh()
      this.modalRef.hide();
    })
  }
  decline(): void {
    this.modalRef.hide();
  }
}
