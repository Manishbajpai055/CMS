import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { CarousellistComponent } from './admin/carousel/carousellist/carousellist.component';
import { UtilService } from './services/utilservices.service';
import { AuthGuard } from './auth.guard';
import { GallerylistComponent } from './admin/admin-gallery/gallerylist/gallerylist.component';
import { StudentModule } from './student/student.module';
import { AdminauthgaurdGuard } from './adminauthgaurd.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressbarModule } from 'ngx-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UsernameValidator } from './authentication/UsernameValidator';
import { ToastrModule } from 'ngx-toastr';
import { GuestComponent } from './guest/guest.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    FormsModule,
    AuthenticationModule,
    StudentModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot(),
    ToastrModule.forRoot()

  ],
  providers: [CarousellistComponent,
    UtilService,
    AuthGuard,
    GallerylistComponent,
    AdminauthgaurdGuard,
    UsernameValidator,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }