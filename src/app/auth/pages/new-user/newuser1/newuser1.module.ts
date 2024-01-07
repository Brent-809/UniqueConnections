import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newuser1PageRoutingModule } from './newuser1-routing.module';

import { Newuser1Page } from './newuser1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newuser1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Newuser1Page]
})
export class Newuser1PageModule {}
