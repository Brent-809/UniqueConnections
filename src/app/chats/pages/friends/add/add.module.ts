import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddPageRoutingModule } from "./add-routing.module";

import { AddPage } from "./add.page";
import { ComponentsModule } from "src/app/shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  declarations: [AddPage],
})
export class AddPageModule {}
