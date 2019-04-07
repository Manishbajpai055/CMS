import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/services/header-footer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerfooterservice:HeaderFooterService) { }
  headerinfo


  ngOnInit() {
  
   this.headerinfo = this.headerfooterservice.getHeader().subscribe(res => {
      this.headerinfo = res
      console.log(res)
    }
    )

}
}
