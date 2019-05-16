import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      this.AboutForm.get('sitename').setValue(res['sitename'])  
      this.AboutForm.get('siteDescription').setValue(res['siteDescription'])  
      this.AboutForm.get('siteAuther').setValue(res['siteAuther'])  

    })
      }
  config = {
    height: '200px',
    uploadImagePath: 'http://127.0.0.1:8000/blog/images/upload/',
    placeholder: 'Enter Text Here',
  };
  constructor(private about: AboutService,private sanitizer:DomSanitizer) {
    }

AboutForm = new FormGroup({
    siteAbout: new FormControl(''),
    sitename: new FormControl(''),
    siteDescription:new FormControl(''),
    siteAuther:new FormControl(''),
  });
 
onSubmit() {
    this.about.editAbout(this.AboutForm.value).subscribe(response=>{
      console.log(response)
    });
  }

}
 