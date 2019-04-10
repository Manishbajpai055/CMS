import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-tab',
  templateUrl: './answer-tab.component.html',
  styleUrls: ['./answer-tab.component.css']
})
export class AnswerTabComponent implements OnInit {
  qustionList = [
    {id:1,name:"New Qustion" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
