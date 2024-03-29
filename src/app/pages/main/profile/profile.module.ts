import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { FeedItemModule } from 'src/app/components/feed-item/feed-item.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LogoComponent } from 'src/app/components/logo/logo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    MatIconModule,
    MatMenuModule,
    FeedItemModule,
    MatSidenavModule,
    
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
