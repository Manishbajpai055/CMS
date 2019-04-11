import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';

@Component({
  selector: 'app-newnotes',
  templateUrl: './newnotes.component.html',
  styleUrls: ['./newnotes.component.css']
})
export class NewnotesComponent implements OnInit {
  selecetdFile: any;
  error: string;
  title: string | Blob;
  desciption
  constructor(private notesservice:NotesServiceService) { }

  ngOnInit() {
  }
  onFileUpload(event){
    let file = event.target.files[0];
      if (file.type == ('image/jpeg' || 'image/jpg' ||'image/png'||'image/tif')) {
          this.selecetdFile = event.target.files[0];
      } else {
        this.error="Please Upload Image Only"
      }      
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
    data.append('title', this.title);
    data.append('description',this.desciption);
    data.append('notes', this.selecetdFile);
      this.notesservice.notsCreate(data)
  }
}
 
}
