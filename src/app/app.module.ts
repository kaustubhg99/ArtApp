import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtofWeekComponent } from './home/artof-week/artof-week.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component'
const appRoutes:   Routes = [
  {path: '', component:HomeComponent},
  {path: 'gallery', component:GalleryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    ArtofWeekComponent,
    BlogCardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
