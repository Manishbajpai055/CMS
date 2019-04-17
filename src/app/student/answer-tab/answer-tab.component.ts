import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { AnswersServiceService } from 'src/app/services/student/answers-service.service';
import { HttpEventType } from '@angular/common/http';
import { UtilService } from 'src/app/services/utilservices.service';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-answer-tab',
  templateUrl: './answer-tab.component.html',
  styleUrls: ['./answer-tab.component.css']
})
export class AnswerTabComponent implements OnInit {
  answerlist 
  Ansurl  = "https://docs.google.com/viewerng/viewer?url="
  errormessege: string;
  downloading: boolean;
  constructor(private answerservice:AnswersServiceService,private util:UtilService,private fileservice:FileSaverService ) { }
  p
  loading: boolean;
  progress
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
    this.loading=true
    if (this.downloading == true) {
      this.errormessege = "! Dowload In Progress Please Wait TO Finish"
      return
     } else {
      this.downloading = true
     }
    this.util.download(url).subscribe(event => {
     if (event.type === HttpEventType.DownloadProgress) {
       this.progress = Math.round(100 * event.loaded / event.total);
       }
     if (event.type === HttpEventType.Response) {
         this.fileservice.save(event.body,filename)
         this.loading=false
         this.progress = 0
         this.errormessege = ''
         this.downloading = false
     }
},(err: any) => {
  this.loading=false
  this.progress = 0
  this.errormessege = "Check YOu Netwrok Connnection"
});
}
}
