import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/services/header-footer.service';
import { siteMeta } from 'src/app/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footernotes:siteMeta[] = []
  constructor(private headerfooter: HeaderFooterService) { }

  ngOnInit() {
  this.headerfooter.getupdatefooter().subscribe(res => {
     this.footernotes = res
   })
  }
}
