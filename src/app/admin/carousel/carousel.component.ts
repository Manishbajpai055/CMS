import { Component, OnInit } from '@angular/core';
import { CarouselService  } from '../../services/carousel.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css',
'./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  selecetdFile : File;
  imagePreview
    onFileUpload(event){
    this.selecetdFile = event.target.files;
  
   
}
  constructor( private carousleservice :CarouselService) { }

  ngOnInit() {
  }

upload(){
  console.log("",this.imagePreview)
  const data = new FormData();
  data.append('image', this.selecetdFile[0]);
    this.carousleservice.carouselupload(data).subscribe(res=>{
      console.log(res)
    })
}

}