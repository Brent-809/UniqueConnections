import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { LottieModule } from 'ngx-lottie';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    LottieModule,
    RouterModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
