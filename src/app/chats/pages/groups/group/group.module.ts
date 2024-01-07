import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { GroupPageRoutingModule } from "./group-routing.module";

import { GroupPage } from "./group.page";
import { DeleteConfirmationComponent } from "src/app/shared/components/delete-confirmation/delete-confirmation.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [GroupPage, DeleteConfirmationComponent],
})
export class GroupPageModule {}
