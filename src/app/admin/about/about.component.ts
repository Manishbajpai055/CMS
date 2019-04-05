import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AboutService} from '../../services/about.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponentadmin implements OnInit  {
  ngOnInit(){  
    this.AboutForm.get('body').setValue("hello!")
      }
  editorInstance;
  html="html  "
  config = {
    height: '200px',
    uploadImagePath: '/api/upload',
    placeholder: 'Enter Text Here',
  };
  editorDisabled = true;
  constructor(private about: AboutService,private sanitizer:DomSanitizer) {
    this.editorDisabled = false;

    }

AboutForm = new FormGroup({
    Keywords: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });
 
   onBlur() {
    console.log('Blur');
  }
onSubmit() {
    console.log(this.AboutForm.value);
    this.about.editAbout(this.AboutForm.value.body);
  }
created(editorInstance) {
    this.editorInstance = editorInstance;
    this.editorInstance.insertText('jksdukshduhd');
   }

}
