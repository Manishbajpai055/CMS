import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})
export class StudentNotesComponent implements OnInit {
  qustionList = [
    {id:1,name:"Answer" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
