import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.css']
})
export class QuestionTabComponent implements OnInit {

  constructor(private qustionservice:QustionServiceService) { }
  qustionList
  p
  ngOnInit() {
    this.qustionservice.qustionsList().subscribe(res=>{
      this.qustionList = res
    })
  }
}
