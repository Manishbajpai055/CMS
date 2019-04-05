import { Component, OnInit } from '@angular/core';
import { CarouselService  } from '../../../services/carousel.service'

@Component({
  selector: 'app-carousellist',
  templateUrl: './carousellist.component.html',
  styleUrls: ['./carousellist.component.css']
})
export class CarousellistComponent implements OnInit {
  sliderArray
  constructor(private carousel:CarouselService) { }

  ngOnInit() {
    this.carousel.crousellist()
    this.carousel.crousellist().subscribe(res =>{
      this.sliderArray = res
    })
  }
  delet(id){
      this.carousel.carouseldelet(id).subscribe(res =>{
      })
  }
 
}
