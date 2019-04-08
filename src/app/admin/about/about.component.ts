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
    this.about.About().subscribe(res=>{
      this.AboutForm.get('siteAbout').setValue(res['siteAbout'])  
    })
      }
  config = {
    height: '200px',
    uploadImagePath: 'http://127.0.0.1:8000/blog/images/upload/',
    placeholder: 'Enter Text Here',
  };
  editorDisabled = true;
  constructor(private about: AboutService,private sanitizer:DomSanitizer) {
    this.editorDisabled = false;
    }

AboutForm = new FormGroup({
    siteAbout: new FormControl(''),
  });
 
onSubmit() {
    console.log(this.AboutForm.value.siteAbout);
    this.about.editAbout(this.AboutForm.value).subscribe(response=>{
      console.log(response)
    });
  }

}
 