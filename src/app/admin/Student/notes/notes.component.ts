import { Component, OnInit, TemplateRef } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  id: any;
  modalRef: BsModalRef;
  p:number
  constructor(private noteservice:NotesServiceService,private modalService: BsModalService) { }
  noteslist
  ngOnInit() {
    this.refresh()
  }
  refresh(){
        this.noteservice.notslist().subscribe(res=>{
          this.noteslist = res
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
    this.noteservice.notesDelete(this.id).subscribe(res =>{
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
