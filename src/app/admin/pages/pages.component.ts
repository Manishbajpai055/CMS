import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  iseditoractive = false
  islistactive = true
  isupdateeditoractive  = false
  slug
  constructor() { }
 ngOnInit() {
  }
       



}
