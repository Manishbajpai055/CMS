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
  constructor(private newpage:PageserviceService,private adminpage:PagesComponent ,private fb: FormBuilder,private formBuilder: FormBuilder,private uti:UtilService ) { }

  ngOnInit() {
    this.NewPost = this.formBuilder.group({
      title: ['', Validators.required],
     content: ['', Validators.required],
     menu_name:['',Validators.required]
  })
    if (this.adminpage.isupdateeditoractive===true){
      this.newpage.pagedetail(this.adminpage.slug).subscribe(res =>{
        this.updatepagedetail = res
        this.NewPost.get('title').setValue(this.updatepagedetail.title) 
        this.NewPost.get('content').setValue(this.updatepagedetail.content)
        this.NewPost.get('menu_name').setValue(this.updatepagedetail.menu_name)   
     })
    }
  }
  NewPost: FormGroup
  config = {
    height: '200px',
    uploadImagePath: this.uti.getDomain()+'api/upload',
    placeholder: 'Enter Text Here',
  };
  onSubmit() {

    this.submitted = true;
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

}
