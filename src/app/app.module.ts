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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    FormsModule,
    AuthenticationModule
  ],
  providers: [CarousellistComponent,UtilService,
    AuthGuard,
    GallerylistComponent,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }