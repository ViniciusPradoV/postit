import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { SelfBuildingSquareSpinnerModule } from 'angular-epic-spinners';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    SelfBuildingSquareSpinnerModule
  ],
  declarations: [
    SignupPage,
    LogoComponent
  ]
})
export class SignupPageModule {}
