import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { PagesComponent } from '../pages.component';
import { UtilService } from 'src/app/services/utilservices.service';

@Component({
  selector: 'app-pageditor',
  templateUrl: './pageditor.component.html',
  styleUrls: ['./pageditor.component.css']
})
export class PageditorComponent implements OnInit {
  updatepagedetail
  submitted: boolean;
  loading:boolean;
  erromassage: any;
  marked
  slug
  base
  active
  constructor(private newpage:PageserviceService,private adminpage:PagesComponent ,private fb: FormBuilder,private formBuilder: FormBuilder,private uti:UtilService ) { }

  ngOnInit() {
    this.NewPost = this.formBuilder.group({
      title: ['', Validators.required],
     content: ['', Validators.required],
     menu_name:''
  })
    if (this.adminpage.isupdateeditoractive===true){
      this.newpage.pagedetail(this.adminpage.slug).subscribe(res =>{
         if (res['menu_name']==='null'||res['menu_name']==='undefined'||res['menu_name']==='') {
           this.marked = false
      } else {
        this.marked  = true
         } 
        this.NewPost.get('title').setValue(res['title']) 
        this.NewPost.get('content').setValue(res['content'])
        this.NewPost.get('menu_name').setValue(res['menu_name'])   
        this.slug = res['slug']
        this.base = window.location.origin
        this.active = this.adminpage.isupdateeditoractive
     })
    }
  }
  NewPost: FormGroup
  config = {
    height: '200px',
    uploadImagePath: this.uti.getDomain()+'api/upload/',
    placeholder: 'Enter Text Here',
  };
  onSubmit() {
    this.submitted = true;
    if(this.marked === false || this.NewPost.value.menu_name===null ||this.NewPost.value.menu_name==='undefined'||this.NewPost.value.menu_name==='' )
    this.NewPost.get('menu_name').setValue("null")   
    if (this.NewPost.invalid) {
      return;
    }
    this.loading =true
    if (this.adminpage.isupdateeditoractive==true){
      this.newpage.pageupdate(this.adminpage.slug,this.NewPost.value).subscribe(res=>{
        this.loading = false
        this.adminpage.islistactive=true
        this.adminpage.iseditoractive= false
      })
    }
    else{
      this.newpage.newpage(this.NewPost.value).subscribe(res=>{
        this.loading = false
        this.adminpage.islistactive=true
      this.adminpage.iseditoractive= false
      },(err) =>{
        this.loading = false
        this.erromassage = "Network Probelm Chheck your Network Connection"
      }) 
    }
  }
  goback(){
      this.adminpage.islistactive=true
      this.adminpage.iseditoractive= false
  }
  get f() { return this.NewPost.controls; }

  toggleVisibility(e){
    this.marked= e.target.checked;
    console.log(this.marked)
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand(this.slug);
    inputElement.setSelectionRange(0, 0);
  }
}
