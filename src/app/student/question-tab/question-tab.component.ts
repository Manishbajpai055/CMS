import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { UtilService } from 'src/app/services/utilservices.service';
import { FileSaverService } from 'ngx-filesaver';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.css']
})
export class QuestionTabComponent implements OnInit {

  Quesurl  = "https://docs.google.com/viewerng/viewer?url="
  progress: number;
  qustionList
  p
  loading = false
  constructor(private qustionservice:QustionServiceService,private util:UtilService,private fileservice: FileSaverService) { }
  
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
    this.loading=true
    this.util.download(url).subscribe(event => {
     if (event.type === HttpEventType.DownloadProgress) {
       this.progress = Math.round(100 * event.loaded / event.total);
       }
     if (event.type === HttpEventType.Response) {
         this.fileservice.save(event.body,filename)
         this.loading=false
         this.progress = 0
     }
});
}
}