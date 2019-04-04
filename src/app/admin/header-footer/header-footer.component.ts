import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  NewPost = new FormGroup({
    Keywords: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

}
