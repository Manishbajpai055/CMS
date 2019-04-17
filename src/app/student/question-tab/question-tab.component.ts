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
  errormessege: string
  downloading
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
    if (this.downloading == true) {
      this.errormessege = "! Dowload In Progress Please Wait TO Finish"
        return
    } else {
      this.downloading=true
    }
    this.loading=true
    this.util.download(url).subscribe(event => {
     if (event.type === HttpEventType.DownloadProgress) {
       this.progress = Math.round(100 * event.loaded / event.total);
       }
     if (event.type === HttpEventType.Response) {
         this.fileservice.save(event.body,filename)
         this.loading=false
         this.progress = 0
         this.errormessege =''
         this.downloading = false
     }
},(err: any) => {
  this.loading=false
  this.progress = 0
  this.errormessege = "Check YOu Netwrok Connnection"
  this.downloading = false
});
}
}