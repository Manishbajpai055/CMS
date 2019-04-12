import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';

@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})
export class StudentNotesComponent implements OnInit {
  noteslist
  p
  constructor(private noteservice:NotesServiceService) { }

  ngOnInit() {
        this.noteservice.notslist().subscribe(res=>{
          this.noteslist=res
        })
  }

}
