import { Component, OnInit } from '@angular/core';
import { QustionServiceService } from 'src/app/services/student/qustion-service.service';
import { QuestionsComponent } from '../questions.component';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  selecetdFile: any;
  error: string;
  title: any;
  desciption: string | Blob;

  constructor(private qustionservice:QustionServiceService,private adminqustion:QuestionsComponent) { }

  ngOnInit() {
  }
  onFileUpload(event){
    let file = event.target.files[0];
    if (file.type == 'application/pdf' ) {
      this.error = null
     this.selecetdFile = event.target.files[0];
 } else {
   this.error="Please Upload Pdfs Only"
 }        
}
upload(){
  console.log("",this.title)
  if (this.title == undefined ||''||null) {
      console.warn("please enter title")
      this.error="please enter title"
  }
  else if(this.selecetdFile==undefined||null){
    this.error="please Select File"
  }
   else {
    const data = new FormData();
    data.append('title', this.title);
    data.append('desciption',this.desciption);
    data.append('qustion', this.selecetdFile);
      this.qustionservice.qustionsUpload(data).subscribe(res=>{
        this.adminqustion.refresh()
        console.log(res)
      })
  }
}
}
