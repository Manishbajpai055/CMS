import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { UtilService } from 'src/app/services/utilservices.service';
import { FileSaverService } from 'ngx-filesaver';
import { HttpEventType } from '@angular/common/http';
import { BsModalService, BsModalRef, ModalOptions ,} from 'ngx-bootstrap';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class QuestionTabComponent implements OnInit {

  Quesurl  = "https://docs.google.com/viewerng/viewer?url="
  progress: number;
  qustionList
  p
  loading = false
  errormessege: string
  downloading
  modalRef: BsModalRef;
  src
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: "my-modal"
  };
  constructor(private modalService: BsModalService, private qustionservice:QustionServiceService,private util:UtilService,private fileservice: FileSaverService) { }
  
  ngOnInit() {
    this.qustionservice.qustionsList().subscribe(res=>{
      this.qustionList = res
    })
  }
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
  viewQues(url){
    var newurl = this.Quesurl+url
    window.open(newurl)
  }

  base64ToArrayBuffer(base64) {
    let binary_string =  window.atob(base64);
    let len = binary_string.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
  download(url,filename){
    if (this.downloading == true) {
      this.errormessege = "Download In Progress Please Wait TO Finish"
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
  this.errormessege = "Check Your Network Connection"
  this.downloading = false
});
}
}