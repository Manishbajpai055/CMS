import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule,
    HomeModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
      }
    }),
        AdminModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
