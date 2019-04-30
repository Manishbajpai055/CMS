import { Component, OnInit, Input, ElementRef } from '@angular/core';

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
  htmlToAdd: string;

  constructor(private elementRef: ElementRef, private headerfooterservice: HeaderFooterService, private Contactus: ContactusService, private formBuilder: FormBuilder) { }
  subscribeform: FormGroup
  submitted = false;

  onSubmit() {
    console.log(this.subscribeform.value)
    this.submitted = true;
    if (this.subscribeform.invalid) {
      return;
    }
    this.Contactus.postSubscriberinfo(this.subscribeform.value)
    alert('Success :) ')
  }
  ngOnInit() {
    this.refresh()
    this.subscribeform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100), Validators.pattern("^[A-Z a-z]*$")],],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")],],
      description: ['', Validators.required]
    })


    var d1 = this.elementRef.nativeElement.querySelector('.one');
    d1.insertAdjacentHTML('beforeend', '<div class="two">two</div>');


      this.htmlToAdd = '<span class="divider">&nbsp;</span>'

}
  get f() { return this.subscribeform.controls; }
  refresh() {
    this.headerfooterservice.getHeadeFooter().subscribe(res => {
      console.log(res)
      this.headerinfo = res
    })
  }
}