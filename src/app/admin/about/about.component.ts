import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponentadmin implements OnInit {
  editorInstance;

  constructor() { }
  body='THis is sbpdiuashdasjdasdkaskjdkajdkj'
  ngOnInit() {
    this.body = "This is body"
  }
  AboutForm = new FormGroup({
    Keywords: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });  

  onSubmit(){
    console.log(this.AboutForm.value);
  }
  created(editorInstance) {
    this.editorInstance = editorInstance;
    this.editorInstance.insertText("jksdukshduhd");

   }
 
}
 