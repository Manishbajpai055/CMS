import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
  onActivate(event) {
    window.scroll(0,0);
}
  
  constructor() { }

}
