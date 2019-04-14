import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { AnswersServiceService } from 'src/app/services/student/answers-service.service';
import { UtilService } from 'src/app/services/utilservices.service';

@Component({
  selector: 'app-answer-tab',
  templateUrl: './answer-tab.component.html',
  styleUrls: ['./answer-tab.component.css']
})
export class AnswerTabComponent implements OnInit {
  answerlist 
  Ansurl  = "https://docs.google.com/viewerng/viewer?url="
  constructor(private answerservice:AnswersServiceService , private utilservices : UtilService) { }
  p
  ngOnInit() {
    this.answerservice.answersList().subscribe(res=>{
      this.answerlist = res
    })
  }

  viewAns(url){
    var newurl = this.Ansurl+url
    window.open(newurl)
  }

  download(url,filename){
    this.utilservices.download(url,filename)
  }

}
