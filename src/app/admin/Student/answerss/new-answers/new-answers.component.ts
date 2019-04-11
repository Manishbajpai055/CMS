import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnswersServiceService } from 'src/app/services/student/answers-service.service';

@Component({
  selector: 'app-new-answers',
  templateUrl: './new-answers.component.html',
  styleUrls: ['./new-answers.component.css']
})
export class NewAnswersComponent implements OnInit {
  submitted: boolean;
  selecetdFile: any;
  error: string;
  title
  description
  constructor(private formBuilder:FormBuilder,private answerservice:AnswersServiceService) { }
  ngOnInit() {
  }
  onFileUpload(event){
    let file = event.target.files[0];
      if (file.type == ('image/jpeg' || 'image/jpg' ||'image/png'||'image/tif')) {
          this.selecetdFile = event.target.files[0];
      } else {
        this.error="Please Upload Image Only"
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
    data.append('image', this.selecetdFile);
    data.append('title', this.title);
    data.append('description',this.description);
      this.answerservice.answerUpload(data)
  }
}
}
