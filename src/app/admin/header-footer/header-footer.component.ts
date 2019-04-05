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

  ngOnInit() {
  }
  headerfooter = new FormGroup({ 
    contact: new FormControl(''),
    email: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    instagram: new FormControl(''),

  });

  onSubmit(){
    console.log(this.headerfooter.value)
    this.getHeadefooter.postHeadeFooter(this.headerfooter.value)

  }

}
