import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';
import { NotesComponent } from '../notes.component';

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
  loading
  constructor(private notesservice:NotesServiceService,private notes:NotesComponent) { }

  ngOnInit() {
  }
  onFileUpload(event){
    let file = event.target.files[0];
      if (file.type == 'application/pdf' ) {
           this.error = null
          this.selecetdFile = event.target.files[0];
      } else {
        this.error="Please Upload Pdfs Only"
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
    this.loading = true
    const data = new FormData();
    data.append('title', this.title);
    data.append('desciption',this.desciption);
    data.append('notes', this.selecetdFile);
      this.notesservice.notsCreate(data).subscribe(res=>{
        this.selecetdFile = null
        this.notes.refresh()
        this.loading = false
      })
    }
  }
 
}
