import { Component, OnInit, TemplateRef } from '@angular/core';
import { CarouselService  } from './../../services/carousel.service'
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent implements OnInit {
  sliderArray ;
  modalRef: BsModalRef;
  index 
  constructor(private modalService: BsModalService,private carousel:CarouselService,) { 
  }

    openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    }


  ngOnInit() {
    
    this.carousel.crousellist()
    this.carousel.crousellist().subscribe(res =>{
      this.sliderArray= res
      this.index = Object.keys(res);;
 
    })
  }

}
