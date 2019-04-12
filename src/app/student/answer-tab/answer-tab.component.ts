import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { AnswersServiceService } from 'src/app/services/student/answers-service.service';

@Component({
  selector: 'app-answer-tab',
  templateUrl: './answer-tab.component.html',
  styleUrls: ['./answer-tab.component.css']
})
export class AnswerTabComponent implements OnInit {
  answerlist 
  constructor(private answerservice:AnswersServiceService ) { }
  p
  ngOnInit() {
    this.answerservice.answersList().subscribe(res=>{
      this.answerlist = res
    })
  }

}
