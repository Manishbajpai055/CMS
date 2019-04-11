import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteservice:NotesServiceService) { }
  noteslist
  ngOnInit() {
    this.refresh()
  }
  refresh(){
        this.noteservice.notslist().subscribe(res=>{
          this.noteslist = res
        })
  }
}
