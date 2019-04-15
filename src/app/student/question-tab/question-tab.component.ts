import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { UtilService } from 'src/app/services/utilservices.service';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.css']
})
export class QuestionTabComponent implements OnInit {

  Quesurl  = "https://docs.google.com/viewerng/viewer?url="

  constructor(private qustionservice:QustionServiceService , private utilservices : UtilService) { }
  qustionList
  p
  ngOnInit() {
    this.qustionservice.qustionsList().subscribe(res=>{
      this.qustionList = res
    })
  }

  viewQues(url){
    var newurl = this.Quesurl+url
    window.open(newurl)
  }

  download(url,filename){
    this.utilservices.download(url,filename)
}
}
