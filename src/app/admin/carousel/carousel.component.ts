import { Component, OnInit } from '@angular/core';
import { CarouselService  } from '../../services/carousel.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  selecetdFile : File;
  imagePreview
    onFileUpload(event){
    this.selecetdFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result;

    };
  reader.readAsDataURL(this.selecetdFile);
}
  constructor( private carousleservice :CarouselService) { }

  ngOnInit() {
  }

upload(){
  console.log("",this.imagePreview)
    var data = {"img":this.imagePreview}
    this.carousleservice.carouselupload(data).subscribe(res=>{
      console.log(res)
    })
}

}
