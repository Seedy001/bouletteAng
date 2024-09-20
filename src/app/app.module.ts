import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Accueil/home/home.component';
import { HomeModule } from './Accueil/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './Accueil/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from './Accueil/carousel/carousel.module';
import { PosteComponent } from './Accueil/poste/poste.component';
import { PosteModule } from './Accueil/poste/poste.module';

@NgModule({
  declarations: [
    AppComponent,
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CarouselModule,
    PosteModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
