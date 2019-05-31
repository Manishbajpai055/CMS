import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AboutService} from '../../services/about.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilService } from 'src/app/services/utilservices.service';

@Component({ 
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponentadmin implements OnInit  {
  selecetdFile
  ngOnInit(){  
    this.about.About().subscribe(res=>{
      this.AboutForm.get('siteAbout').setValue(res['siteAbout'])  
      this.AboutForm.get('sitename').setValue(res['sitename'])  
      this.AboutForm.get('siteDescription').setValue(res['siteDescription'])  
      this.AboutForm.get('siteAuther').setValue(res['siteAuther']) 
      this.selecetdFile =  res['siteLogo'] 
    })
      }
  config = {
    height: '200px',
    weight: 'auto',
    uploadImagePath: this.util.getDomain()+'blog/images/upload/',
    
  };
  constructor(private about: AboutService,private util:UtilService) {
    }
  
  onFileUpload(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.selecetdFile = file
    }
  }
  upload(){
    if(this.selecetdFile==undefined||null){
     this.onSubmit()
     return

    }
    else{
      const data = new FormData();
      data.append('siteLogo', this.selecetdFile);
      data.append('siteAbout',this.AboutForm.value['siteAbout']);
      data.append('sitename', this.AboutForm.value['sitename']);
      data.append('siteDescription',this.AboutForm.value['siteDescription']);
      this.about.editAbout(data).subscribe(response=>{
        console.log(response)
      });    }
    }
AboutForm = new FormGroup({
    siteAbout: new FormControl(''),
    sitename: new FormControl(''),
    siteDescription:new FormControl(''),
    siteAuther:new FormControl(''),
  });
 
onSubmit() {
 // data = data['siteLogo'] = this.selecetdFile
    this.about.editAbout(this.AboutForm.value).subscribe(response=>{
      console.log(response)
    });
  }

}
 