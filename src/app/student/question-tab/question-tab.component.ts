import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.css']
})
export class QuestionTabComponent implements OnInit {

  constructor() { }
  qustionList = [
    {id:1,name:"New Qustion" }
  ]
  ngOnInit() {
  }
}