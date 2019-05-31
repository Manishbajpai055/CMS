import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';
import { UtilService } from 'src/app/services/utilservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private about:AboutService,private util:UtilService) { }
  home: FormGroup
  config = {
    tabsize: 2,
    height: 200,
    uploadImagePath: this.util.getDomain()+'blog/images/upload/',
  };
  ngOnInit() {
    this.home = this.formBuilder.group({
      siteHome: ['', Validators.required]
   })
   this.about.About().subscribe(res=>{
    this.home.get('siteHome').setValue(res['siteHome'])  
  })
    
    
  }
  onSubmit() {
    // data = data['siteLogo'] = this.selecetdFile
       this.about.editAbout(this.home.value).subscribe(response=>{
         console.log(response)
       });
     }

}
