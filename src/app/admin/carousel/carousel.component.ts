import { Component, OnInit } from '@angular/core';
import { CarouselService  } from '../../services/carousel.service'
import { CarousellistComponent } from './carousellist/carousellist.component';
import { map } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css',
'./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  selecetdFile : File;
  title
  description
  error
  loading
  progress: number;
  errormessege: string;
    onFileUpload(event){
      let file = event.target.files[0];
        if (file.type == ('image/jpeg' || 'image/jpg' ||'image/png'||'image/tif')) {
            this.selecetdFile = event.target.files[0];
        } else {
          this.error="Please Upload Image Only"
        }   
}
  constructor( private carousleservice :CarouselService,private caoruslelist:CarousellistComponent) { }

  ngOnInit() {
  }

upload(){
  console.log("",this.title)
  if (this.title == undefined ||''||null) {
      console.warn("please enter title")
      this.error="please enter title"
  }
  else if(this.selecetdFile==undefined||null){
    this.error="please Select File"
  }
   else {
   this.loading = true
    const data = new FormData();
    data.append('image', this.selecetdFile);
    data.append('title', this.title); 
    data.append('description',this.description);
      this.carousleservice.carouselupload(data).subscribe(res =>{
       this.uploadfile(data)
      })
  }
}
uploadfile(data){
  this.loading=true
  this.carousleservice.carouselupload(data).subscribe(event => {
   if (event.type === HttpEventType.UploadProgress) {
     this.progress = Math.round(100 * event.loaded / event.total);
     }
   if (event.type === HttpEventType.Response) {
        this.selecetdFile = null
        this.caoruslelist.refresh()
        this.loading = false
    console.log(event.body)
     }
    },(err: any) => {
  this.loading=false
  this.progress = 0
  this.errormessege = "Check YOu Netwrok Connnection"
  });
  }
}