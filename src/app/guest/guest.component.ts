import { Component, OnInit, TemplateRef, ViewContainerRef, ViewChild, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { UtilService } from '../services/utilservices.service';
import { FileSaverService } from 'ngx-filesaver';
import { HttpEventType } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactusService } from '../services/contactus.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  qnalist
  loading: boolean;
  downloading: boolean;
  errormessege: string;
  progress: number;
  qnavarified
  modalRef: BsModalRef;
  subscribeform: FormGroup
  submitted = false;

  Ansurl  = "https://docs.google.com/viewerng/viewer?url="

  constructor( private Contactus: ContactusService,private elementRef: ElementRef,private qnaservice: GuestService,private util:UtilService,private fileservice:FileSaverService,private modalService: BsModalService,private formBuilder: FormBuilder) { }
  @ViewChild('template')
  private template : TemplateRef<any>
    ngOnInit() {
    this.qnavarified = localStorage.getItem("qnavarified")
    if (this.qnavarified == "true") {
      this.qnavarified= true
      this.refresh()
    } else {
      this.openModal(this.template)
      this.qnavarified = false
    }
    this.subscribeform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100), Validators.pattern("^[A-Z a-z]*$")],],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")],],
      description: ['', Validators.required]
    })
}
  get f() { return this.subscribeform.controls; }

  viewAns(url){
    var newurl = this.Ansurl+url
    window.open(newurl)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit() {
    console.log(this.subscribeform.value)
    this.submitted = true;
    if (this.subscribeform.invalid) {
      return;
    }
    else{
       this.Contactus.postSubscriberinfo(this.subscribeform.value)
       localStorage.setItem("qnavarified","true")
       this.qnavarified = true
       this.refresh()
       this.modalRef.hide()
  }
}
  refresh() {
    this.qnaservice.guestqnaList().subscribe(res =>{
    this.qnalist = res
    console.log(res)
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
