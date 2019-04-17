import { Component, OnInit,TemplateRef } from '@angular/core';
import { CarouselService  } from '../../../services/carousel.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-carousellist',
  templateUrl: './carousellist.component.html',
  styleUrls: ['./carousellist.component.css']
})
export class CarousellistComponent implements OnInit {
  sliderArray 
  delteDilog = false
  modalRef: BsModalRef;
  id:number
  constructor(private carousel:CarouselService,private modalService: BsModalService) { }

  ngOnInit() {
      this.refresh()
  }
  delet(id,template){
      this.id=id
      this.openModal(template)   
  }
  ///DilougBox
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.carousel.carouseldelet(this.id).subscribe(res =>{
      console.log("dekete")
      this.refresh()
    })
    this.modalRef.hide();
    this.refresh()
  }
  decline(): void {
    this.modalRef.hide();
  }
  refresh(){
     this.carousel.crousellist().subscribe(res=>{
      this.sliderArray =res
    })
  }
}
