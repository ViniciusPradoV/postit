import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {BrowserAnimationsModule}  from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpAsyncModule } from './modules/http-async/http-async.module';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpAsyncModule,
    HttpClientModule,
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
