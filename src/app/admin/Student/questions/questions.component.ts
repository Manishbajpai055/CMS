import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  qustionlist
  constructor(private qustinservice:QustionServiceService) { }

  ngOnInit() {
    this.refresh()
  }
  refresh(){
        this.qustinservice.qustionsList().subscribe(res=>{
          this.qustionlist = res
        })
  }
}
