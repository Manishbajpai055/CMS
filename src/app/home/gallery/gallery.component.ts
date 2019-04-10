import { Component, OnInit } from '@angular/core';
import { GalleryserviceService } from 'src/app/services/galleryservice.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  sliderArray ;
  index 
  constructor(private galleryservice:GalleryserviceService,private config:NgbCarouselConfig) { 
  }

  ngOnInit() {
    
    this.galleryservice.gallerylist()
    this.galleryservice.gallerylist().subscribe(res =>{
      this.sliderArray= res
      this.index = Object.keys(res);;
    })
  }

}
