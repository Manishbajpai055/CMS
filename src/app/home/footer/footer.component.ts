import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/services/header-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footernotes
  constructor(private headerfooter: HeaderFooterService) { }

  ngOnInit() {
   this.footernotes = this.headerfooter.getupdatefooter().subscribe(res => {
     this.footernotes = res
   }
   )

  }

}
