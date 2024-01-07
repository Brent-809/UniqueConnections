import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register1PageRoutingModule } from './register1-routing.module';
import { Register1Page } from './register1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Register1Page]
})
export class Register1PageModule {}
