import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-pageditor',
  templateUrl: './pageditor.component.html',
  styleUrls: ['./pageditor.component.css']
})
export class PageditorComponent implements OnInit {
  updatepagedetail
  submitted: boolean;
  constructor(private newpage:PageserviceService,private adminpage:PagesComponent ,private fb: FormBuilder,private formBuilder: FormBuilder ) { }

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
  /**({
    title: new FormControl(''),
    content: new FormControl(''),
    menu_name: new FormControl(''),
  });   */
  config = {
    height: '200px',
    uploadImagePath: '/api/upload',
    placeholder: 'Enter Text Here',
  };
  onSubmit() {

    this.submitted = true;
    if (this.NewPost.invalid) {
      return;
    }
    if (this.adminpage.isupdateeditoractive==true){
      this.newpage.pageupdate(this.adminpage.slug,this.NewPost.value).subscribe(res=>{
        console.log(res)
        this.adminpage.islistactive=true
        this.adminpage.iseditoractive= false
      })
    }
    else{
      this.newpage.newpage(this.NewPost.value).subscribe(res=>{
        console.log(res)
        this.adminpage.islistactive=true
      this.adminpage.iseditoractive= false
      }) 
    } 
  }
  goback(){
      this.adminpage.islistactive=true
      this.adminpage.iseditoractive= false
  }
  get f() { return this.NewPost.controls; }

}
