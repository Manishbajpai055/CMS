import { Component, OnInit } from '@angular/core';
import { GallerylistComponent } from './gallerylist/gallerylist.component';
import { GalleryserviceService } from 'src/app/services/galleryservice.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})
export class AdminGalleryComponent implements OnInit {
  selecetdFile : File;
  title
  description
  error
    onFileUpload(event){
    this.selecetdFile = event.target.files[0];
    allowedFileType: ["pdf", "xls"]
}


  constructor( private galleryservice : GalleryserviceService ,private galleryelist:GallerylistComponent) { }

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
    const data = new FormData();
    data.append('image', this.selecetdFile);
    data.append('title', this.title);
    data.append('description',this.description);
      this.galleryservice.gallryupload(data).subscribe(res =>{
        console.log("Carousle Errpr")
      })

      this.galleryelist.refresh()

  }
}

}