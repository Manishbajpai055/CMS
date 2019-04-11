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
        this.headerfooter.get('instagram').setValue(this.header_footer.instagram) 
        this.headerfooter.get('street').setValue(this.header_footer.street) 
        this.headerfooter.get('city').setValue(this.header_footer.city) 
        this.headerfooter.get('state').setValue(this.header_footer.state) 
        this.headerfooter.get('country').setValue(this.header_footer.country) 
        this.headerfooter.get('pincode').setValue(this.header_footer.pincode) 

      })
  }
  headerfooter = new FormGroup({ 
    contact: new FormControl(''),
    email: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    instagram: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    pincode : new FormControl(''),
    country : new FormControl(''),
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
