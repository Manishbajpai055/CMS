import { Component, OnInit } from '@angular/core';
import { AnswersServiceService } from 'src/app/services/student/answers-service.service';

@Component({
  selector: 'app-answerss',
  templateUrl: './answerss.component.html',
  styleUrls: ['./answerss.component.css']
})
export class AnswerssComponent implements OnInit {
  answerlist
  constructor(private answeservice:AnswersServiceService) { }

  ngOnInit() {
      this.refresh()
  }
  refresh(){
        this.answeservice.answersList().subscribe(res=>{
          this.answerlist = res
        })
  }
}
