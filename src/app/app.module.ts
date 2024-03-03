import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HomePageComponent } from './home-page/home-page.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenupageComponent } from './menupage/menupage.component';
import { CommonfooterComponent } from './commonfooter/commonfooter.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenupageComponent,
    CommonfooterComponent,
    AboutpageComponent,
    ContactpageComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
