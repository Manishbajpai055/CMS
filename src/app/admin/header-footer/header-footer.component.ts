import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HeaderFooterService } from 'src/app/services/header-footer.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit {

  constructor(private getHeadefooter:HeaderFooterService ) { }
  header_footer
  ngOnInit() {
      this.getHeadefooter.getHeadeFooter().subscribe(res=>{
        this.header_footer = res
        this.headerfooter.get('contact').setValue(this.header_footer.Contact) 
        this.headerfooter.get('email').setValue(this.header_footer.Email) 
        this.headerfooter.get('facebook').setValue(this.header_footer.facebook) 
        this.headerfooter.get('instagram').setValue(this.header_footer.instagram) 
        this.headerfooter.get('twitter').setValue(this.header_footer.twitter) 
      })
  }
  headerfooter = new FormGroup({ 
    contact: new FormControl(''),
    email: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    instagram: new FormControl(''),
    Street: new FormControl(''),
    City: new FormControl(''),
    State: new FormControl(''),
    Pincode : new FormControl(''),

  });
  Footerdetail = new FormGroup({
    footerdetail : new FormControl('')
  })

  onSubmit(){
    console.log(this.headerfooter.value)
    this.getHeadefooter.postHeadeFooter(this.headerfooter.value)
  }
  updatefooter(){
    this.getHeadefooter.updatefooter(this.Footerdetail.value)
    console.log(this.Footerdetail.value)
  }
  


}
