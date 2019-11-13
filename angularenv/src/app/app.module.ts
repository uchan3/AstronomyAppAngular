import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AstronomyDBService } from './services/astronomy-db.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { HomeComponent } from './components/home/home.component';
import { NasaImageAPIComponent } from './components/nasa-image-api/nasa-image-api.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogueComponent,
    PostComponent,
    CommentComponent,
    HomeComponent,
    NasaImageAPIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot( AstronomyDBService, {passThruUnknownUrl: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
