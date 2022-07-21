import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import {AtomSpinnerModule, SelfBuildingSquareSpinnerModule} from 'angular-epic-spinners'
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AtomSpinnerModule,
    SelfBuildingSquareSpinnerModule,
    
  ],
  declarations: [
    LoginPage,
    LogoComponent,
  ]
})
export class LoginPageModule {}
