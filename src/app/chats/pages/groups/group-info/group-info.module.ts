import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { GroupInfoPageRoutingModule } from "./group-info-routing.module";

import { GroupInfoPage } from "./group-info.page";
import { ComponentsModule } from "src/app/shared/components/components.module";

@NgModule({
  declarations: [GroupInfoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupInfoPageRoutingModule,
    ComponentsModule,
  ],
})
export class GroupInfoPageModule {}
