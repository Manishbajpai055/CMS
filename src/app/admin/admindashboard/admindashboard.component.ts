import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private subscriberservice:ContactusService,private modalService: BsModalService) { }
  subscriberlist
  modalRef: BsModalRef;
  id
  ngOnInit() {
    this.letestSubscribers()
  }
  letestSubscribers(){
    this.subscriberservice.subscriberlist().subscribe(res=>{
      this.subscriberlist = res
    })
  }
delete(id,template){
  this.id=id
  this.openModal(template)
}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.subscriberservice.subscriberDelete(this.id).subscribe(res =>{
      console.log("dekete")
      this.letestSubscribers()
    })
    this.modalRef.hide();
    this.letestSubscribers()
  }
  decline(): void {
    this.modalRef.hide();
  }
}
