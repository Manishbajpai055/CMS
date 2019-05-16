import { Component, OnInit, TemplateRef } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  qustionlist
  id
  p
  modalRef: BsModalRef;
  constructor(private qustinservice:QustionServiceService,private modalService: BsModalService) { }

  ngOnInit() {
    this.refresh()
  }
  refresh(){
        this.qustinservice.qustionsList().subscribe(res=>{
          this.qustionlist = res
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
    this.qustinservice.qustionsdelete(this.id).subscribe(res =>{
      console.log("dekete",res)
      this.refresh()
    })
    this.modalRef.hide();
    this.refresh()
  }
  decline(): void {
    this.modalRef.hide();
  }
}
