import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  constructor() { }
  NewPost = new FormGroup({
    Keywords: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });  ngOnInit() {
  }
       

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.NewPost.value);
}
 

}
