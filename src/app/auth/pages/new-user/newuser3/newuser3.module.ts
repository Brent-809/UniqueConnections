import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { Newuser3PageRoutingModule } from "./newuser3-routing.module";

import { Newuser3Page } from "./newuser3.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newuser3PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Newuser3Page],
})
export class Newuser3PageModule {}
