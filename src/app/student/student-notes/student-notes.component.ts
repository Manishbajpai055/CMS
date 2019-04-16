import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';
import { UtilService } from 'src/app/services/utilservices.service';

@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})



export class StudentNotesComponent implements OnInit {
  Notesurl  = "https://docs.google.com/viewerng/viewer?url="
  noteslist
  p
  loading
  error
  constructor(private noteservice:NotesServiceService,private http:HttpClient,private util:UtilService,private _FileSaverService: FileSaverService) { }

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
    this.loading = true
    this.util.downloadd(url,filename).subscribe(res => {
      this._FileSaverService.save(res.body, filename+'.pdf');
      this.loading = false
    },(err: any) => {
      this.loading = false
    })
}

}
