import { Component, OnInit, TemplateRef } from '@angular/core';
import { NotesServiceService } from 'src/app/services/student/notes-service.service';
import { saveAs } from 'file-saver';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UtilService } from 'src/app/services/utilservices.service';
import { FileSaverService } from 'ngx-filesaver';
import { BsModalService, BsModalRef, ModalOptions, } from 'ngx-bootstrap';


@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})

export class StudentNotesComponent implements OnInit {
  Notesurl = "https://docs.google.com/viewerng/viewer?url="
  noteslist
  p
  loading: boolean;
  progress
  errormessege: any;
  downloading
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private noteservice: NotesServiceService, private http: HttpClient, private util: UtilService, private fileservice: FileSaverService) { }

  ngOnInit() {
    this.noteservice.notslist().subscribe(res => {
      this.noteslist = res
    })
  }
  
  src
  openModal(template: TemplateRef<any>, url) {
    const config: ModalOptions = { class: 'my-class' };
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

  download(url, filename) {
    this.loading = true
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
        this.downloading = false
        this.fileservice.save(event.body, filename)
        this.loading = false
        this.errormessege = ''
        this.progress = 0

      }
    }, (err: any) => {
      this.loading = false
      this.progress = 0
      this.errormessege = "Check YOu Netwrok Connnection"
    });
  }

}
