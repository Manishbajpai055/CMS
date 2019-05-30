import { Component, OnInit, TemplateRef } from '@angular/core';
import { GuestService } from 'src/app/services/guest.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-guest-qna',
  templateUrl: './guest-qna.component.html',
  styleUrls: ['./guest-qna.component.css']
})
export class GuestQNAComponent implements OnInit {
  qna = ''
  error: any;
  selecetdFile;
  loading: boolean;
  title: string
  desciption: string;
  data = new FormData();
  qnalist
  id: any;
  modalRef: BsModalRef;
  p:number
  constructor(private qnaservice: GuestService,private modalService: BsModalService) { }
  ngOnInit() {
    this.refresh()
  }
  onFileUpload(event) {
    let file = event.target.files[0];
    if (file.type == 'application/pdf') {
      this.error = null
      this.selecetdFile = event.target.files[0];
    } else {
      this.error = "Please Upload Pdfs Only"
    }
  }
  upload() {
    console.log("", this.title)
    if (this.title == undefined || '' || null) {
      console.warn("please enter title")
      this.error = "please enter title"
    }
    else if (this.selecetdFile == undefined || null) {
      this.error = "please Select File"
    }
    else {
      this.loading = true
      this.data.append('title', this.title);
      console.log(this.selecetdFile)
      this.data.append('desciption', this.desciption);
      this.data.append('qnafile', this.selecetdFile);
      this.data.append('type', this.qna);
      console.log(this.data)
      this.qnaservice.creatguestquestions(this.data).subscribe(res => {
        this.title = ''
        this.desciption = ''
        this.selecetdFile = null
        this.refresh()
        this.loading = false
      })
    }
  }
  refresh() {
  this.qnaservice.guestqnaList().subscribe(res =>{
  this.qnalist = res
  console.log(res)
})
  }

  delet(id,template) {
    console.log(id,);
    this.id = id
    this.openModal(template)   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.qnaservice.guestqnadelete(this.id).subscribe(res =>{
      this.refresh()
    })
    this.modalRef.hide();
  }
  decline(): void {
    this.modalRef.hide();
  }
}
