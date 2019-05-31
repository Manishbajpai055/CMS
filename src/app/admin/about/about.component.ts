import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AboutService} from '../../services/about.service';
import { UtilService } from 'src/app/services/utilservices.service';

@Component({ 
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponentadmin implements OnInit  {
  selecetdFile
  massage
  ngOnInit(){  
    this.about.About().subscribe(res=>{
      this.AboutForm.get('siteAbout').setValue(res['siteAbout'])  
      this.AboutForm.get('sitename').setValue(res['sitename'])  
      this.AboutForm.get('siteDescription').setValue(res['siteDescription'])  
      this.AboutForm.get('siteAuther').setValue(res['siteAuther']) 
      this.imgURL =  res['siteLogo'] 
    })
      }
      imgURL
      loading
  config = {
    height: '200px',
    weight: 'auto',
    uploadImagePath: this.util.getDomain()+'blog/images/upload/',
  };
  constructor(private about: AboutService,private util:UtilService) {
    }
  
  onFileUpload(event) {
    if(event.target.files && event.target.files.length > 0) {
      var reader = new FileReader();
      this.selecetdFile = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }
  }
  upload(){
    this.loading = true
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
        this.massage = "About Page Updated"
        this.loading = false
        console.log(response)
      });   
     }
    }
AboutForm = new FormGroup({
    siteAbout: new FormControl(''),
    sitename: new FormControl(''),
    siteDescription:new FormControl(''),
    siteAuther:new FormControl(''),
  });
 
onSubmit() {
    this.about.editAbout(this.AboutForm.value).subscribe(response=>{
      this.loading = false
      this.massage = "About Page Updated"
    });
  }

}
 