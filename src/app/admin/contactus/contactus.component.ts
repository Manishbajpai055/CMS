import { Component, OnInit, Input } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactusService } from 'src/app/services/contactus.service';
import { HeaderFooterService } from 'src/app/services/header-footer.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  headerinfo

  constructor(private headerfooterservice:HeaderFooterService, private Contactus:ContactusService,private formBuilder: FormBuilder) { }
  subscribeform: FormGroup 
  submitted = false;

onSubmit(){
  console.log(this.subscribeform.value)
  this.submitted = true;
    if (this.subscribeform.invalid) {
        return;
    }
    this.Contactus.postSubscriberinfo(this.subscribeform.value)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.subscribeform.value))
}
  ngOnInit() {
    this.refresh()
    this.subscribeform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(50)], Validators.pattern("^[0-9]*$"),],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)], Validators.pattern("^[0-9]*$"),],
      description: ['', Validators.required]
  })
   }
  get f() { return this.subscribeform.controls; }
  refresh(){
    this.headerfooterservice.getHeadeFooter().subscribe(res=>{
      console.log(res)
      this.headerinfo=res
    })
  }
}