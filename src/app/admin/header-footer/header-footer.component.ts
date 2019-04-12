import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,  } from '@angular/forms';
import { HeaderFooterService } from 'src/app/services/header-footer.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { validate } from 'graphql';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Validators } from 'angular-reactive-validation';
import { ValidationError } from 'angular-reactive-validation/validation-error';
@Component({
  selector: '[customValidator ,app-header-footer]',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit {

  constructor(modalService: BsModalService , private formBuilder: FormBuilder, private getHeadefooter:HeaderFooterService ) { }
  header_footer
  modalRef: BsModalRef;
  submitted
  formSubmitted = true;


  ngOnInit() {
      this.getHeadefooter.getHeadeFooter().subscribe(res=>{
        this.header_footer = res
        this.headerfooter.get('contact').setValue(this.header_footer.contact) 
        this.headerfooter.get('email').setValue(this.header_footer.email) 
        this.headerfooter.get('facebook').setValue(this.header_footer.facebook) 
        this.headerfooter.get('instagram').setValue(this.header_footer.instagram) 
        this.headerfooter.get('twitter').setValue(this.header_footer.twitter) 
        this.headerfooter.get('instagram').setValue(this.header_footer.instagram) 
        this.headerfooter.get('street').setValue(this.header_footer.street) 
        this.headerfooter.get('city').setValue(this.header_footer.city) 
        this.headerfooter.get('state').setValue(this.header_footer.state) 
        this.headerfooter.get('country').setValue(this.header_footer.country) 
        this.headerfooter.get('pincode').setValue(this.header_footer.pincode) 
        this.headerfooter.get('organizationname').setValue(this.header_footer.organizationname) 

      })
      
      this.buildForm();
      
  }

buildForm(){
  this.headerfooter = this.formBuilder.group({
    contact: [null, [Validators.required]],
   last_name: ['', Validators.required],
   email:['',Validators.required ],
   facebook:['',Validators.required],
   twitter:['',Validators.required],
   instagram:['',Validators.required],
   street:['',Validators.required],
   city:['',Validators.required],
   state:['',Validators.required],
   pincode:['',Validators.required],
   country:['',Validators.required],
   organizationname:['',Validators.required],
   
})
}

  headerfooter = new FormGroup({ 
    contact: new FormControl('',),
    email: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    instagram: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    pincode : new FormControl(''),
    country : new FormControl(''),
    organizationname : new FormControl('')
    

  });
 

  onSubmit(){
    this.formSubmitted = true;
    if (this.headerfooter.invalid) {
      console.log("error"); // Process your form
    }
    else{
      console.log("working")
      this.getHeadefooter.postHeadeFooter(this.headerfooter.value)
      
    }
  }  
  

  
  get f() { return this.headerfooter.controls; }

}
