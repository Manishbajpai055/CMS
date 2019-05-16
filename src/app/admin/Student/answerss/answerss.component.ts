import { Component, OnInit, TemplateRef } from '@angular/core';
import { AnswersServiceService } from 'src/app/services/student/answers-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-answerss',
  templateUrl: './answerss.component.html',
  styleUrls: ['./answerss.component.css']
})
export class AnswerssComponent implements OnInit {
  answerlist
  id: any;
  modalRef: BsModalRef;
  p
  constructor(private answeservice:AnswersServiceService,private modalService: BsModalService) { }

  ngOnInit() {
      this.refresh()
  }
  refresh(){
        this.answeservice.answersList().subscribe(res=>{
          this.answerlist = res
        })
  }
  delet(id,template) {
    this.id = id
    this.openModal(template)   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.answeservice.answerdelete(this.id).subscribe(res =>{
      this.refresh()
      this.modalRef.hide();
    })
  }
  decline(): void {
    this.modalRef.hide();
  }
}
