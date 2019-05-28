import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { AnswersServiceService } from 'src/app/services/student/answers-service.service';
import { HttpEventType } from '@angular/common/http';
import { UtilService } from 'src/app/services/utilservices.service';
import { FileSaverService } from 'ngx-filesaver';
import { BsModalService, BsModalRef, ModalOptions ,} from 'ngx-bootstrap';

@Component({
  selector: 'app-answer-tab',
  templateUrl: './answer-tab.component.html',
  styleUrls: ['./answer-tab.component.css'],
  
})
export class AnswerTabComponent implements OnInit {
  answerlist 
  Ansurl  = "https://docs.google.com/viewerng/viewer?url="
  errormessege: string;
  downloading: boolean;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService ,private answerservice:AnswersServiceService,private util:UtilService,private fileservice:FileSaverService ) { }
  p
  loading: boolean;
  progress
  ngOnInit() {
    this.answerservice.answersList().subscribe(res=>{
      this.answerlist = res
    })
  }
  src
  openModal(template: TemplateRef<any>, url) {
    
    const initialState = { id: 12312, type: "test", class: "modal-lg" };
    this.util.download(url).subscribe(event => {
      if (event.type === HttpEventType.Response) {
        var file = new File([event.body], "filename", { type: "text/plain" });
        var url = window.URL.createObjectURL(file);
        this.src = url;
        this.modalRef = this.modalService.show(template, initialState);
      }
    })
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
