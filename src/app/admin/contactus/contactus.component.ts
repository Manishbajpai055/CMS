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
  headerinfo: any;

  constructor(private headerfooterservice:HeaderFooterService, private Contactus:ContactusService) { }

  subscribe: FormGroup = new FormGroup({
    Name: new FormControl('' ),
    Email: new FormControl(''),
    Phone_no : new FormControl(''),
    Description : new FormControl(''),
});

onSubmit(){
  console.log(this.subscribe.value)
  this.Contactus.postSubscriberinfo(this.subscribe.value)
}
  ngOnInit() {
    this.headerinfo = this.headerfooterservice.getHeader().subscribe(res => {
      this.headerinfo = res
      console.log(res)
    })
    

  }

}
