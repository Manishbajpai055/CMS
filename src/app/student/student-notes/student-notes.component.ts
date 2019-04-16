import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';
import { saveAs } from 'file-saver';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UtilService } from 'src/app/services/utilservices.service';
import { FileSaverService } from 'ngx-filesaver';


@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})



export class StudentNotesComponent implements OnInit {
  Notesurl  = "https://docs.google.com/viewerng/viewer?url="
  noteslist
  p
  loading: boolean;
  constructor(private noteservice:NotesServiceService,private http:HttpClient,private util:UtilService,private fileservice:FileSaverService) { }

  ngOnInit() {
        this.noteservice.notslist().subscribe(res=>{
          this.noteslist=res
        })
  }
  viewNotes(url){
    var newurl = this.Notesurl+url
    window.open(newurl) 
  }
  download(url,filename){
         this.loading=true
         this.util.download(url).subscribe(event => {
          if (event.type === HttpEventType.DownloadProgress) {
              console.log("download progress");
          }
          if (event.type === HttpEventType.Response) {
              this.fileservice.save(event.body,filename)
          }
  });
}

}
