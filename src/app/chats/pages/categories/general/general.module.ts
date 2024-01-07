import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { GeneralPageRoutingModule } from "./general-routing.module";

import { GeneralPage } from "./general.page";
import { RefresherComponent } from "src/app/shared/components/refresher/refresher.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GeneralPageRoutingModule],
  declarations: [GeneralPage],
})
export class GeneralPageModule {}
