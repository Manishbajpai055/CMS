import { Component, OnInit } from '@angular/core';
import { CarouselService  } from './../../services/carousel.service'
import { ViewEncapsulation } from '@angular/compiler/src/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent implements OnInit {
  sliderArray ;
  index 
  constructor(private carousel:CarouselService,) { 
  }

  ngOnInit() {
    
    this.carousel.crousellist()
    this.carousel.crousellist().subscribe(res =>{
      this.sliderArray= res
      this.index = Object.keys(res);;
 
    })
  }

}
