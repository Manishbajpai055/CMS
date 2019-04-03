import { Component, OnInit, ViewChild } from '@angular/core';
import { TdTextEditorComponent } from '@covalent/text-editor';
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { FormGroup, FormControl } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class AdminBlogComponent implements OnInit { 
  constructor( ) { }
  iseditoractive = false
  islistactive = true
  ngOnInit() {

  }
 
 
}
