import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
