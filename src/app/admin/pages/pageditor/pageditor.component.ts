import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PageserviceService } from 'src/app/services/pageservice.service';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-pageditor',
  templateUrl: './pageditor.component.html',
  styleUrls: ['./pageditor.component.css']
})
export class PageditorComponent implements OnInit {
  updatepagedetail
  constructor(private newpage:PageserviceService,private adminpage:PagesComponent ) { }

  ngOnInit() {
    if (this.adminpage.isupdateeditoractive===true){
      this.newpage.pagedetail(this.adminpage.slug).subscribe(res =>{
        this.updatepagedetail = res
        this.NewPost.get('title').setValue(this.updatepagedetail.title) 
        this.NewPost.get('content').setValue(this.updatepagedetail.content)
        this.NewPost.get('menu_name').setValue(this.updatepagedetail.menu_name)   
     })
    }
  }
  NewPost = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    menu_name: new FormControl(''),
  });  
  config = {
    height: '200px',
    uploadImagePath: '/api/upload',
    placeholder: 'Enter Text Here',
  };
  onSubmit() {
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
}
