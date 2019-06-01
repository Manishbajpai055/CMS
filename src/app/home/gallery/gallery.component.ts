import { Component, OnInit, TemplateRef } from '@angular/core';
import { GalleryserviceService } from 'src/app/services/galleryservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  sliderArray ;
  index 
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private galleryservice:GalleryserviceService,) { 
  }

  ngOnInit() {
    this.galleryservice.gallerylist().subscribe(res =>{
      this.sliderArray= res
      this.index = Object.keys(res);
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
